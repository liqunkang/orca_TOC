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
-{32}CARTESIAN COORDINATES \\(ANGSTROEM\\){32}
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
-{28}CARTESIAN COORDINATES \\(A\\.U\\.\\){28}
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
-{28}INTERNAL COORDINATES \\(ANGSTROEM\\){28}
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
-{24}INTERNAL COORDINATES \\(A\\.U\\.\\){24}
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
-{21}BASIS SET INFORMATION{21}
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
-{25}BASIS SET IN INPUT FORMAT{25}
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
-{33}AUXILIARY/J BASIS SET INFORMATION{33}
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
-{37}AUXILIARY/J BASIS SET IN INPUT FORMAT{37}
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
-{12}SCF SETTINGS{12}
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
-{22}SHARK INTEGRAL PACKAGE{22}
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
-{30}INITIAL GUESS: MODEL POTENTIAL{30}
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
-{22}INITIAL GUESS ORBITALS{22}
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
-{19}DFT GRID GENERATION{19}
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
-{20}COSX GRID GENERATION{20}
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
-{14}SCF ITERATIONS{14}
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
-{16}TOTAL SCF ENERGY{16}
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
-{15}SCF CONVERGENCE{15}
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
-{16}ORBITAL ENERGIES{16}
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
-{18}MOLECULAR ORBITALS{18}
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
-{7}DENSITY{7}
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
-{12}SPIN DENSITY{12}
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
-{44}MULLIKEN ATOMIC CHARGES AND SPIN POPULATIONS{44}
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
-{45}MULLIKEN ORBITAL CHARGES AND SPIN POPULAITONS{45}
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
-{45}MULLIKEN ORBITAL CHARGES AND SPIN POPULAITONS{45}
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
-{24}MULLIKEN OVERLAP CHARGES{24}
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
-{35}MULLIKEN ORBITAL POPULATIONS PER MO{35}
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
-{43}LOEWDIN ATOMIC CHARGES AND SPIN POPULATIONS{43}
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
-{44}LOEWDIN ORBITAL CHARGES AND SPIN POPULATIONS{44}
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
-{52}LOEWDIN REDUCED ORBITAL CHARGES AND SPIN POPULATIONS{52}
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
-{37}LOEWDIN BOND ORDERS \\(THRESH 0\\.050000\\){37}
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
-{34}LOEWDIN ORBITAL POPULATIONS PER MO{34}
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
-{42}LOEWDIN REDUCED ORBITAL POPULATIONS PER MO{42}
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
-{7}TIMINGS{7}
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
-{80}\\s+ORCA ELECTRIC PROPERTIES CALCULATION\\s+-{80}
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
-{13}DIPOLE MOMENT{13}
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
-{20}Rotational spectrum {20}
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
-{80}\\s+ORCA SPIN-ORBIT COUPLING CALCULATION\\s+-{80}
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
-{40}SHARK SPIN-ORBIT MEAN FIELD CALCULATION {40}
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
-{80}\\s+ORCA EPR/NMR CALCULATION\\s+-{80}
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
-{80}\\s+ORCA CP-SCF CALCULATION\\s+-{80}
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
-{19}ELECTRONIC G-MATRIX{19}
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
