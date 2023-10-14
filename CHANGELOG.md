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
