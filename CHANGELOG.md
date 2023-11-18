# Change Log

All notable changes to the "orcatoc" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.0.1] - 2023-10-09

- Initial release of orcatoc. This is a very early release and is still under development.

## [0.0.2] - 2023-10-11

- Added support for automatically showing TOC view when opening an ORCA output file.

- `headings.md` file added to the extension. This file contains a list of regular expressions that are used to parse the ORCA output file. The list of regular expressions will be updated in future releases.

- `generate_patterns.py` script added to the extension. This script is used to parse the `headings.md` file and generate the `patterns.json` file. The `patterns.json` file is used by the extension to parse the ORCA output file.

## [0.1.0] - 2023-10-14

- Update of `patterns.json` file and `headings.md` file. Additional regular expressions added to the list used to parse the ORCA output file. Most frequently used keywords in the ORCA output file are now parsed. The list of regular expressions will be updated in future releases.

## [0.2.0] - 2023-10-15

- This version removed the previous `generate_patterns.py` script and the `headings.md` file. The list of regular expressions in `patterns.json` file is now more unversal and the matched text is displayed in the `ORCA FILE OUTLINE` view. Most of the keywords in the ORCA output file are in full capital letters, which is not very user friendly. The matched text is now converted to title case before being displayed in the `ORCA FILE OUTLINE` view. There is a list of keywords in the `keywords.json` file, which will be used to replace some of the converted matched text to its correct form. The list of keywords will be updated in future small releases.

## [0.2.1] - 2023-10-16

- changed to new plugin icon
- fixed an error in the regex pattern
- showOrcaOutline and replaceKeywords are changed to async functions to accelerate the processing speed
- the parseOrcaFile function is optimized for handing very big orca output files (<50MB). The buffer structure is optimized. The progress of parsing will be showed as a message in VS Code
- additional error message is added

## [0.2.2] - 2023-10-16

- removed debug lines from extension.js
- update of keywords.json
- update of patterns.json. Now the extension could handle both CRLF and LF line breaks in the regular expressions.

## [0.2.3] - 2023-10-17

- Bug fixes and optimizations
- Update of `patterns.json` file
- Added support for large ORCA output files (>50MB).Added a new command `Show ORCA Outline External` to allow the user to load large ORCA output files manually from the file system.
- Fixed a bug by adding dummy headings to the `ORCA FILE OUTLINE` view when the heading levels are not in strict ascending order.

## [0.2.4] - 2023-10-28

- Update of `keywords.json` file

## [0.3.0] - 2023-11-18

- Added support for saving the collapsed status of the TOC view in the settings of the extension. When navigating to different ORCA output files, the TOC view status for each file will be restored.
- Added support for automatically showing TOC view when opening an ORCA output file. (bug fix)
- Added instruction screenshots to this README.
