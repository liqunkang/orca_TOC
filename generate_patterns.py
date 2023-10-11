import re
import json

def extract_info(markdown_content):
    lines = markdown_content.split("\n")
    sections = []
    current_section = []

    # Split lines into sections based on headings
    for line in lines:
        if line.startswith("##"):
            if current_section:
                sections.append("\n".join(current_section))
                current_section = []
        current_section.append(line)

    # Ensure the last section is also included
    if current_section:
        sections.append("\n".join(current_section))

    extracted_data = []

    for section in sections:
        title = re.search(r"^#* (.+)", section)
        if not title:
            continue

        title = title.group(1)
        level = re.search(r"Heading level: (\d+)", section)
        regex = re.search(r"Regular expression:\n\n```plaintext\n(.*?)\n```", section, re.DOTALL)
        visibility = re.search(r"Visiblity: (\w+)", section)

        if not (level and regex and visibility):
            continue

        level = int(level.group(1))
        regex = regex.group(1).strip()
        visibility = visibility.group(1).strip()

        if visibility == "show":
            extracted_data.append({
                "regex": regex.replace("\\\\", "\\"),
                "level": level,
                "title": title
            })

    return extracted_data

with open("headings.md", "r") as f:
    markdown_content = f.read()
    
with open("patterns.json", "w") as f:
    json.dump(extract_info(markdown_content), f, indent=4)