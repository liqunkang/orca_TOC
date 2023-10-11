---
author: Liqun Kang
date: 2023-10-10
title: Reference for headings layout in ORCA input file
---

[TOC]

# Beginning of ORCA file

+ Searching keywords:

```plaintext
* O   R   C   A *
```

+ Heading level: 0

## Input File

+ Searching keywords:

```plaintext
================================================================================
                                       INPUT FILE
================================================================================
```

+ Heading level: 1

## Single Point Calculation

+ Searching keywords:

```plaintext
* Single Point Calculation *
```

+ Heading level: 1

### Cartesian Coordinates

+ Searching keywords:

```plaintext
---------------------------------
CARTESIAN COORDINATES (ANGSTROEM)
---------------------------------
```

+ Heading level: 2

### Cartesian Coordinates (A.U.)

+ Searching keywords:

```plaintext
----------------------------
CARTESIAN COORDINATES (A.U.)
----------------------------
```

+ Heading level: 2

### Internal Coordinates (Angstroem)

+ Searching keywords:

```plaintext
--------------------------------
INTERNAL COORDINATES (ANGSTROEM)
--------------------------------
```

+ Heading level: 2

### Internal Coordinates (A.U.)

+ Searching keywords:

```plaintext
---------------------------
INTERNAL COORDINATES (A.U.)
---------------------------
```

+ Heading level: 2

### Basis Set Information

+ Searching keywords:

```plaintext
---------------------
BASIS SET INFORMATION
---------------------
```

+ Heading level: 2

### Basis Set Input Format

+ Searching keywords:

```plaintext
-------------------------
BASIS SET IN INPUT FORMAT
-------------------------
```

+ Heading level: 2

### Auxiliary Basis Set Information

+ Searching keywords:

```plaintext
---------------------------------
AUXILIARY/J BASIS SET INFORMATION
---------------------------------
```

+ Heading level: 2

### Auxiliary Basis Set Input Format

+ Searching keywords:

```plaintext
-------------------------------------
AUXILIARY/J BASIS SET IN INPUT FORMAT
-------------------------------------
```

+ Heading level: 2

## ORCA GTO Integral Calculation

+ Searching keywords:

```plaintext
ORCA GTO INTEGRAL CALCULATION
```

+ Heading level: 1

### ORCA SCF

+ Searching keywords:

```plaintext
-------------------------------------------------------------------------------
                                 ORCA SCF
-------------------------------------------------------------------------------
```

+ Heading level: 2

#### SCF Settings

+ Searching keywords:

```plaintext
------------
SCF SETTINGS
------------
```

+ Heading level: 3

#### SHARK Integral Package

+ Searching keywords:

```plaintext
----------------------
SHARK INTEGRAL PACKAGE
----------------------
```

+ Heading level: 3

#### Initial Guess: Model Potential

+ Searching keywords:

```plaintext
------------------------------
INITIAL GUESS: MODEL POTENTIAL
------------------------------
```

+ Heading level: 3

#### Initial Guess Orbitals

+ Searching keywords:

```plaintext
----------------------
INITIAL GUESS ORBITALS
----------------------
```

+ Heading level: 3

#### DFT Grid Generation

+ Searching keywords:

```plaintext
-------------------
DFT GRID GENERATION
-------------------
```

+ Heading level: 3

#### COSX Grid Generation

+ Searching keywords:

```plaintext
--------------------
COSX GRID GENERATION
--------------------
```

+ Heading level: 3

#### SCF Iterations

+ Searching keywords:

```plaintext
--------------
SCF ITERATIONS
--------------
```

+ Heading level: 3

#### Total SCF Energy

+ Searching keywords:

```plaintext
----------------
TOTAL SCF ENERGY
----------------
```

+ Heading level: 3

#### UHF Spin Contamination

+ Searching keywords:

```plaintext
---------------
SCF CONVERGENCE
---------------
```

+ Heading level: 3

#### Orbital Energies

+ Searching keywords:

```plaintext
----------------
ORBITAL ENERGIES
----------------
```

+ Heading level: 3

#### Molecular Orbitals

+ Searching keywords:

```plaintext
------------------
MOLECULAR ORBITALS
------------------
```

+ Heading level: 3

#### Density

+ Searching keywords:

```plaintext
-------
DENSITY
-------
```

+ Heading level: 3

#### Spin Density

+ Searching keywords:

```plaintext
------------
SPIN DENSITY
------------
```

+ Heading level: 3

## Mulliken Population Analysis

+ Searching keywords:

```plaintext
* MULLIKEN POPULATION ANALYSIS *
```

+ Heading level: 1

### Mulliken Atomic Charges and Spin Populations

+ Searching keywords:

```plaintext
--------------------------------------------
MULLIKEN ATOMIC CHARGES AND SPIN POPULATIONS
--------------------------------------------
```

+ Heading level: 2

### Mulliken Orbital Charges and Spin Populations

+ Searching keywords:

```plaintext
---------------------------------------------
MULLIKEN ORBITAL CHARGES AND SPIN POPULAITONS
---------------------------------------------
```

+ Heading level: 2

### Mulliken Reduced Orbital Charges and Spin Populations

+ Searching keywords:

```plaintext
---------------------------------------------
MULLIKEN ORBITAL CHARGES AND SPIN POPULAITONS
---------------------------------------------
```

+ Heading level: 2

### Mulliken Overlap Charges

+ Searching keywords:

```plaintext
------------------------
MULLIKEN OVERLAP CHARGES
------------------------
```

+ Heading level: 2

### Mulliken Orbital Populations per MO

+ Searching keywords:

```plaintext
-----------------------------------
MULLIKEN ORBITAL POPULATIONS PER MO
-----------------------------------
```

+ Heading level: 2

## Lowdin Population Analysis

+ Searching keywords:

```plaintext
* LOEWDIN POPULATION ANALYSIS *
```

+ Heading level: 1

### Lowdin Atomic Charges and Spin Populations

+ Searching keywords:

```plaintext
-------------------------------------------
LOEWDIN ATOMIC CHARGES AND SPIN POPULATIONS
-------------------------------------------
```

+ Heading level: 2

### Lowdin Orbital Charges and Spin Populations

+ Searching keywords:

```plaintext
--------------------------------------------
LOEWDIN ORBITAL CHARGES AND SPIN POPULATIONS
--------------------------------------------
```

+ Heading level: 2

### Lowdin Reduced Orbital Charges and Spin Populations

+ Searching keywords:

```plaintext
----------------------------------------------------
LOEWDIN REDUCED ORBITAL CHARGES AND SPIN POPULATIONS
----------------------------------------------------
```

+ Heading level: 2

### Lowdin Bond Orders

+ Searching keywords:

```plaintext
---------------------------------
LOEWDIN BOND ORDERS (THRESH 0.050000)
---------------------------------
```

+ Heading level: 2

### Lowdin Orbital Populations per MO

+ Searching keywords:

```plaintext
----------------------------------
LOEWDIN ORBITAL POPULATIONS PER MO
----------------------------------
```

+ Heading level: 2

### Lowdin Reduced Orbital Populations per MO

+ Searching keywords:

```plaintext
------------------------------------------
LOEWDIN REDUCED ORBITAL POPULATIONS PER MO
-------------------------------------------
```

+ Heading level: 2

## Mayer Population Analysis

+ Searching keywords:

```plaintext
* MAYER POPULATION ANALYSIS *
```

+ Heading level: 1

### Timings

+ Searching keywords:

```plaintext
-------
TIMINGS
-------
```

+ Heading level: 2

## Final Single Point Energy

+ Searching keywords:

```plaintext
FINAL SINGLE POINT ENERGY
```

+ Heading level: 1

## ORCA property calculations

+ Searching keywords:

```plaintext
*     ORCA property calculations      *
```

+ Heading level: 1

### ORCA Electric Properties Calculation

+ Searching keywords:

```plaintext
------------------------------------------------------------------------------
                       ORCA ELECTRIC PROPERTIES CALCULATION
------------------------------------------------------------------------------
```

+ Heading level: 2

#### Dipole Moment

+ Searching keywords:

```plaintext
-------------
DIPOLE MOMENT
-------------
```

#### Rotational Spectrum

+ Searching keywords:

```plaintext
--------------------
Rotational spectrum 
--------------------
```

### ORCA Spin-Orbit Coupling Calculation

+ Searching keywords:

```plaintext
------------------------------------------------------------------------------
                         ORCA SPIN-ORBIT COUPLING CALCULATION
------------------------------------------------------------------------------
```

+ Heading level: 2

#### SHARK Spin-Orbit Mean Field Calculation

+ Searching keywords:

```plaintext
----------------------------------------
SHARK SPIN-ORBIT MEAN FIELD CALCULATION 
----------------------------------------
```

+ Heading level: 3

### ORCA EPR/NMR Calculation

+ Searching keywords:

```plaintext
------------------------------------------------------------------------------
                                ORCA EPR/NMR CALCULATION
------------------------------------------------------------------------------
```

+ Heading level: 2

### ORCA CP-SCF Calculation

+ Searching keywords:

```plaintext
------------------------------------------------------------------------------
                           ORCA CP-SCF CALCULATION
------------------------------------------------------------------------------
```

+ Heading level: 2

#### Electronic G-Matrix

+ Searching keywords:

```plaintext
-------------------
ELECTRONIC G-MATRIX
-------------------
```

+ Heading level: 3

# End of ORCA file

+ Searching keywords:

```plaintext
TOTAL RUN TIME:
```

+ Heading level: 0

