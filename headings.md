---
author: Liqun Kang
date: 2023-10-11
title: Reference for headings layout in ORCA output file
---

[TOC]

# ORCA Output File Structure

This document is a reference for headings layout in ORCA output file.

## Beginning of ORCA file

+ Searching keywords:

```plaintext
* O   R   C   A *
```

+ Heading level: 1

+ Regular expression:

```plaintext
\\* O   R   C   A \\*
```

+ Visiblity: show

### Input File

+ Searching keywords:

```plaintext
================================================================================
                                       INPUT FILE
================================================================================
```

+ Heading level: 2

+ Regular expression:

```plaintext
={80}\\s+INPUT FILE\\s+={80}
```

+ Visiblity: show

### Single Point Calculation

+ Searching keywords:

```plaintext
* Single Point Calculation *
```

+ Heading level: 2

+ Regular expression:

```plaintext
\\* Single Point Calculation \\*
```

+ Visiblity: show

#### Cartesian Coordinates

+ Searching keywords:

```plaintext
---------------------------------
CARTESIAN COORDINATES (ANGSTROEM)
---------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{33}\nCARTESIAN COORDINATES \\(ANGSTROEM\\)\n-{33}
```

+ Visiblity: show

#### Cartesian Coordinates (A.U.)

+ Searching keywords:

```plaintext
----------------------------
CARTESIAN COORDINATES (A.U.)
----------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{28}\nCARTESIAN COORDINATES \\(A\\.U\\.\\)\n-{28}
```

+ Visiblity: show

#### Internal Coordinates (Angstroem)

+ Searching keywords:

```plaintext
--------------------------------
INTERNAL COORDINATES (ANGSTROEM)
--------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{31}\nINTERNAL COORDINATES \\(ANGSTROEM\\)\n-{31}
```

+ Visiblity: show

#### Internal Coordinates (A.U.)

+ Searching keywords:

```plaintext
---------------------------
INTERNAL COORDINATES (A.U.)
---------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{26}\nINTERNAL COORDINATES \\(A\\.U\\.\\)\n-{26}
```

+ Visiblity: show

#### Basis Set Information

+ Searching keywords:

```plaintext
---------------------
BASIS SET INFORMATION
---------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{21}\nBASIS SET INFORMATION\n-{21}
```


+ Visiblity: show

#### Basis Set Input Format

+ Searching keywords:

```plaintext
-------------------------
BASIS SET IN INPUT FORMAT
-------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{25}\nBASIS SET IN INPUT FORMAT\n-{25}
```

+ Visiblity: show

#### Auxiliary Basis Set Information

+ Searching keywords:

```plaintext
---------------------------------
AUXILIARY/J BASIS SET INFORMATION
---------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{33}\nAUXILIARY/J BASIS SET INFORMATION\n-{33}
```

+ Visiblity: show

#### Auxiliary Basis Set Input Format

+ Searching keywords:

```plaintext
-------------------------------------
AUXILIARY/J BASIS SET IN INPUT FORMAT
-------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{37}\nAUXILIARY/J BASIS SET IN INPUT FORMAT\n-{37}
```

+ Visiblity: show

### ORCA GTO Integral Calculation

+ Searching keywords:

```plaintext
ORCA GTO INTEGRAL CALCULATION
```

+ Heading level: 2

+ Regular expression:

```plaintext
ORCA GTO INTEGRAL CALCULATION
```

+ Visiblity: show

#### ORCA SCF

+ Searching keywords:

```plaintext
-------------------------------------------------------------------------------
                                 ORCA SCF
-------------------------------------------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{79}\\s+ORCA SCF\\s+-{79}
```

+ Visiblity: show

##### SCF Settings

+ Searching keywords:

```plaintext
------------
SCF SETTINGS
------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{12}\nSCF SETTINGS\n-{12}
```

+ Visiblity: show

##### SHARK Integral Package

+ Searching keywords:

```plaintext
----------------------
SHARK INTEGRAL PACKAGE
----------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{22}\nSHARK INTEGRAL PACKAGE\n-{22}
```

+ Visiblity: show

##### Initial Guess: Model Potential

+ Searching keywords:

```plaintext
------------------------------
INITIAL GUESS: MODEL POTENTIAL
------------------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{30}\nINITIAL GUESS: MODEL POTENTIAL\n-{30}
```

+ Visiblity: show

##### Initial Guess Orbitals

+ Searching keywords:

```plaintext
----------------------
INITIAL GUESS ORBITALS
----------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{22}\nINITIAL GUESS ORBITALS\n-{22}
```

+ Visiblity: show

##### DFT Grid Generation

+ Searching keywords:

```plaintext
-------------------
DFT GRID GENERATION
-------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{19}\nDFT GRID GENERATION\n-{19}
```

+ Visiblity: show

##### COSX Grid Generation

+ Searching keywords:

```plaintext
--------------------
COSX GRID GENERATION
--------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{20}\nCOSX GRID GENERATION\n-{20}
```

+ Visiblity: show

##### SCF Iterations

+ Searching keywords:

```plaintext
--------------
SCF ITERATIONS
--------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{14}\nSCF ITERATIONS\n-{14}
```

+ Visiblity: show

##### Total SCF Energy

+ Searching keywords:

```plaintext
----------------
TOTAL SCF ENERGY
----------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{16}\nTOTAL SCF ENERGY\n-{16}
```

+ Visiblity: show

##### UHF Spin Contamination

+ Searching keywords:

```plaintext
---------------
SCF CONVERGENCE
---------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{15}\nSCF CONVERGENCE\n-{15}
```

+ Visiblity: show

##### Orbital Energies

+ Searching keywords:

```plaintext
----------------
ORBITAL ENERGIES
----------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{16}\nORBITAL ENERGIES\n-{16}
```

+ Visiblity: show

##### Molecular Orbitals

+ Searching keywords:

```plaintext
------------------
MOLECULAR ORBITALS
------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{18}\nMOLECULAR ORBITALS\n-{18}
```

+ Visiblity: show

##### Density

+ Searching keywords:

```plaintext
-------
DENSITY
-------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{7}\nDENSITY\n-{7}
```

+ Visiblity: show

##### Spin Density

+ Searching keywords:

```plaintext
------------
SPIN DENSITY
------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{12}\nSPIN DENSITY\n-{12}
```

+ Visiblity: show

### Mulliken Population Analysis

+ Searching keywords:

```plaintext
* MULLIKEN POPULATION ANALYSIS *
```

+ Heading level: 2

+ Regular expression:

```plaintext
\\* MULLIKEN POPULATION ANALYSIS \\*
```

+ Visiblity: show

#### Mulliken Atomic Charges and Spin Populations

+ Searching keywords:

```plaintext
--------------------------------------------
MULLIKEN ATOMIC CHARGES AND SPIN POPULATIONS
--------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{44}\nMULLIKEN ATOMIC CHARGES AND SPIN POPULATIONS\n-{44}
```

+ Visiblity: show

#### Mulliken Orbital Charges and Spin Populations

+ Searching keywords:

```plaintext
---------------------------------------------
MULLIKEN ORBITAL CHARGES AND SPIN POPULAITONS
---------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{45}\nMULLIKEN ORBITAL CHARGES AND SPIN POPULAITONS\n-{45}
```

+ Visiblity: show

#### Mulliken Reduced Orbital Charges and Spin Populations

+ Searching keywords:

```plaintext
---------------------------------------------
MULLIKEN ORBITAL CHARGES AND SPIN POPULAITONS
---------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{45}\nMULLIKEN ORBITAL CHARGES AND SPIN POPULAITONS\n-{45}
```

+ Visiblity: show

#### Mulliken Overlap Charges

+ Searching keywords:

```plaintext
------------------------
MULLIKEN OVERLAP CHARGES
------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{24}\nMULLIKEN OVERLAP CHARGES\n-{24}
```

+ Visiblity: show

#### Mulliken Orbital Populations per MO

+ Searching keywords:

```plaintext
-----------------------------------
MULLIKEN ORBITAL POPULATIONS PER MO
-----------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{35}\nMULLIKEN ORBITAL POPULATIONS PER MO\n-{35}
```

+ Visiblity: show

### Lowdin Population Analysis

+ Searching keywords:

```plaintext
* LOEWDIN POPULATION ANALYSIS *
```

+ Heading level: 2

+ Regular expression:

```plaintext
\\* LOEWDIN POPULATION ANALYSIS \\*
```

+ Visiblity: show

#### Lowdin Atomic Charges and Spin Populations

+ Searching keywords:

```plaintext
-------------------------------------------
LOEWDIN ATOMIC CHARGES AND SPIN POPULATIONS
-------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{43}\nLOEWDIN ATOMIC CHARGES AND SPIN POPULATIONS\n-{43}
```

+ Visiblity: show

#### Lowdin Orbital Charges and Spin Populations

+ Searching keywords:

```plaintext
--------------------------------------------
LOEWDIN ORBITAL CHARGES AND SPIN POPULATIONS
--------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{44}\nLOEWDIN ORBITAL CHARGES AND SPIN POPULATIONS\n-{44}
```

+ Visiblity: show

#### Lowdin Reduced Orbital Charges and Spin Populations

+ Searching keywords:

```plaintext
----------------------------------------------------
LOEWDIN REDUCED ORBITAL CHARGES AND SPIN POPULATIONS
----------------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{52}\nLOEWDIN REDUCED ORBITAL CHARGES AND SPIN POPULATIONS\n-{52}
```

+ Visiblity: show

#### Lowdin Bond Orders

+ Searching keywords:

```plaintext
---------------------------------
LOEWDIN BOND ORDERS (THRESH 0.050000)
---------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{37}\nLOEWDIN BOND ORDERS \\(THRESH 0\\.050000\\)\n-{37}
```

+ Visiblity: show

#### Lowdin Orbital Populations per MO

+ Searching keywords:

```plaintext
----------------------------------
LOEWDIN ORBITAL POPULATIONS PER MO
----------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{34}\nLOEWDIN ORBITAL POPULATIONS PER MO\n-{34}
```

+ Visiblity: show

#### Lowdin Reduced Orbital Populations per MO

+ Searching keywords:

```plaintext
------------------------------------------
LOEWDIN REDUCED ORBITAL POPULATIONS PER MO
-------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{42}\nLOEWDIN REDUCED ORBITAL POPULATIONS PER MO\n-{42}
```

+ Visiblity: show

### Mayer Population Analysis

+ Searching keywords:

```plaintext
* MAYER POPULATION ANALYSIS *
```

+ Heading level: 2

+ Regular expression:

```plaintext
\\* MAYER POPULATION ANALYSIS \\*
```

+ Visiblity: show

#### Timings

+ Searching keywords:

```plaintext
-------
TIMINGS
-------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{7}\nTIMINGS\n-{7}
```

+ Visiblity: show

### Final Single Point Energy

+ Searching keywords:

```plaintext
FINAL SINGLE POINT ENERGY
```

+ Heading level: 2

+ Regular expression:

```plaintext
FINAL SINGLE POINT ENERGY
```

+ Visiblity: show

### ORCA property calculations

+ Searching keywords:

```plaintext
*     ORCA property calculations      *
```

+ Heading level: 2

+ Regular expression:

```plaintext
\\*     ORCA property calculations      \\*
```

+ Visiblity: show

#### ORCA Electric Properties Calculation

+ Searching keywords:

```plaintext
------------------------------------------------------------------------------
                       ORCA ELECTRIC PROPERTIES CALCULATION
------------------------------------------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{78}\\s+ORCA ELECTRIC PROPERTIES CALCULATION\\s+-{78}
```

+ Visiblity: show

##### Dipole Moment

+ Searching keywords:

```plaintext
-------------
DIPOLE MOMENT
-------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{13}\nDIPOLE MOMENT\n-{13}
```

+ Visiblity: show

##### Rotational Spectrum

+ Searching keywords:

```plaintext
--------------------
Rotational spectrum 
--------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{20}\nRotational spectrum \n-{20}
```

+ Visiblity: show

#### ORCA Spin-Orbit Coupling Calculation

+ Searching keywords:

```plaintext
------------------------------------------------------------------------------
                         ORCA SPIN-ORBIT COUPLING CALCULATION
------------------------------------------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{78}\\s+ORCA SPIN-ORBIT COUPLING CALCULATION\\s+-{78}
```

+ Visiblity: show

##### SHARK Spin-Orbit Mean Field Calculation

+ Searching keywords:

```plaintext
----------------------------------------
SHARK SPIN-ORBIT MEAN FIELD CALCULATION 
----------------------------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{40}\nSHARK SPIN-ORBIT MEAN FIELD CALCULATION \n-{40}
```

+ Visiblity: show

#### ORCA EPR/NMR Calculation

+ Searching keywords:

```plaintext
------------------------------------------------------------------------------
                                ORCA EPR/NMR CALCULATION
------------------------------------------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{78}\\s+ORCA EPR/NMR CALCULATION\\s+-{78}
```

+ Visiblity: show

#### ORCA CP-SCF Calculation

+ Searching keywords:

```plaintext
------------------------------------------------------------------------------
                           ORCA CP-SCF CALCULATION
------------------------------------------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{78}\\s+ORCA CP-SCF CALCULATION\\s+-{78}
```

+ Visiblity: show

##### Electronic G-Matrix

+ Searching keywords:

```plaintext
-------------------
ELECTRONIC G-MATRIX
-------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{19}\nELECTRONIC G-MATRIX\n-{19}
```

+ Visiblity: show

## End of ORCA file

+ Searching keywords:

```plaintext
TOTAL RUN TIME:
```

+ Heading level: 1

+ Regular expression:

```plaintext
TOTAL RUN TIME:
```

+ Visiblity: show
