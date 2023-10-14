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

### Geometry Optimization Run

+ Searching keywords:

```plaintext
* Geometry Optimization Run *
```

+ Heading level: 2

+ Regular expression:

```plaintext
\\* Geometry Optimization Run \\*
```

+ Visiblity: show

#### Optimization Run Done

+ Searching keywords:

```plaintext
*** OPTIMIZATION RUN DONE ***
```

+ Heading level: 3

+ Regular expression:

```plaintext
\\*\\*\\* OPTIMIZATION RUN DONE \\*\\*\\*
```

+ Visiblity: show

#### ORCA Optimization Coordinate Setup

+ Searching keywords:

```plaintext
------------------------------------------------------------------------------
                        ORCA OPTIMIZATION COORDINATE SETUP
------------------------------------------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{78}\\s+ORCA OPTIMIZATION COORDINATE SETUP\\s+-{78}
```

+ Visiblity: show

#### Geometry Optimization Cycle

+ Searching keywords:

```plaintext
*                GEOMETRY OPTIMIZATION CYCLE   1            *
```

+ Heading level: 3

+ Regular expression:

```plaintext
\\*\\s+GEOMETRY OPTIMIZATION CYCLE\\s+\\d+\\s+\\*
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

### Energy+Gradient Calculation

+ Searching keywords:

```plaintext
* Energy+Gradient Calculation *
```

+ Heading level: 2

+ Regular expression:

```plaintext
\\* Energy\\+Gradient Calculation \\*
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

#### Auxiliary/J Basis Set Information

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

#### Auxiliary/J Basis Set Input Format

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

#### Auxiliary/C Basis Set Information

+ Searching keywords:

```plaintext
---------------------------------
AUXILIARY/C BASIS SET INFORMATION
---------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{33}\nAUXILIARY/C BASIS SET INFORMATION\n-{33}
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

##### Initial Guess: MOREAD

+ Searching keywords:

```plaintext
---------------------
INITIAL GUESS: MOREAD
---------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{21}\nINITIAL GUESS: MOREAD\n-{21}
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

##### SCF Convergence

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

##### UHF Spin Contamination

+ Searching keywords:

```plaintext
----------------------
UHF SPIN CONTAMINATION
----------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{22}\nUHF SPIN CONTAMINATION\n-{22}
```

+ Visiblity: show

#### ORCA-CASSCF

+ Searching keywords:

```plaintext
-------------------------------------------------------------------------------
                              ORCA-CASSCF
-------------------------------------------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{79}\\s+ORCA-CASSCF\\s+-{79}
```

+ Visiblity: show

##### CAS-SCF Settings

+ Searching keywords:

```plaintext
------------------
CAS-SCF ITERATIONS
------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{18}\nCAS-SCF ITERATIONS\n-{18}
```

+ Visiblity: show

##### CAS-SCF Results

+ Searching keywords:

```plaintext
--------------
CASSCF RESULTS
--------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{14}\nCASSCF RESULTS\n-{14}
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

###### Spin Up Orbitals

+ Searching keywords:

```plaintext
SPIN UP ORBITALS
```

+ Heading level: 5

+ Regular expression:

```plaintext
SPIN UP ORBITALS
```

+ Visiblity: show

###### Spin Down Orbitals

+ Searching keywords:

```plaintext
SPIN DOWN ORBITALS
```

+ Heading level: 5

+ Regular expression:

```plaintext
SPIN DOWN ORBITALS
```

+ Visiblity: show

##### CAS-SCF States

+ Searching keywords:

```plaintext
--------------
CAS-SCF STATES
--------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{15,}\nCAS-SCF STATES.*\n-{15,}
```

+ Visiblity: show

##### Density Matrix

+ Searching keywords:

```plaintext
--------------
DENSITY MATRIX
--------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{14}\nDENSITY MATRIX\n-{14}
```

+ Visiblity: show

##### Spin-Density Matrix

+ Searching keywords:

```plaintext
-------------------
SPIN-DENSITY MATRIX
-------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{19}\nSPIN-DENSITY MATRIX\n-{19}
```

+ Visiblity: show

##### Energy Components

+ Searching keywords:

```plaintext
-----------------
ENERGY COMPONENTS
-----------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{17}\nENERGY COMPONENTS\n-{17}
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

##### Loewdin Orbital-Compositions

+ Searching keywords:

```plaintext
----------------------------
LOEWDIN ORBITAL-COMPOSITIONS
----------------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{28}\nLOEWDIN ORBITAL-COMPOSITIONS\n-{28}
```

+ Visiblity: show

##### Loewdin Reduced Active MOs

+ Searching keywords:

```plaintext
----------------------------
LOEWDIN REDUCED ACTIVE MOs  
----------------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{28}\nLOEWDIN REDUCED ACTIVE MOs  \n-{28}
```

+ Visiblity: show

#### ORCA Population Analysis

+ Searching keywords:

```plaintext
------------------------------------------------------------------------------
                           ORCA POPULATION ANALYSIS
------------------------------------------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{78}\\s+ORCA POPULATION ANALYSIS\\s+-{78}
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

#### Mulliken Atomic Charges and Spin Densities

+ Searching keywords:

```plaintext
------------------------------------------
MULLIKEN ATOMIC CHARGES AND SPIN DENSITIES
------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{42}\nMULLIKEN ATOMIC CHARGES AND SPIN DENSITIES\n-{42}
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
-----------------------------------------------------
MULLIKEN REDUCED ORBITAL CHARGES AND SPIN POPULATIONS
-----------------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{53}\nMULLIKEN REDUCED ORBITAL CHARGES AND SPIN POPULATIONS\n-{53}
```

+ Visiblity: show

#### Mulliken Reduced Orbital Charges and Spin Densities

+ Searching keywords:

```plaintext
---------------------------------------------------
MULLIKEN REDUCED ORBITAL CHARGES AND SPIN DENSITIES
---------------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{51}\nMULLIKEN REDUCED ORBITAL CHARGES AND SPIN DENSITIES\n-{51}
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

#### Mulliken Atomic Charges

+ Searching keywords:

```plaintext
---------------------
MULLIKEN ATOMIC CHARGES
---------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{21}\nMULLIKEN ATOMIC CHARGES\n-{21}
```

+ Visiblity: show

#### Mulliken Reduced Orbital Charges

+ Searching keywords:

```plaintext
--------------------------------
MULLIKEN REDUCED ORBITAL CHARGES
--------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{32}\nMULLIKEN REDUCED ORBITAL CHARGES\n-{32}
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

#### Lowdin Atomic Charges and Spin Densities

+ Searching keywords:

```plaintext
-----------------------------------------
LOEWDIN ATOMIC CHARGES AND SPIN DENSITIES
-----------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{41}\nLOEWDIN ATOMIC CHARGES AND SPIN DENSITIES\n-{41}
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

#### Lowdin Reduced Orbital Charges and Spin Densities

+ Searching keywords:

```plaintext
--------------------------------------------------
LOEWDIN REDUCED ORBITAL CHARGES AND SPIN DENSITIES
--------------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{50}\nLOEWDIN REDUCED ORBITAL CHARGES AND SPIN DENSITIES\n-{50}
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
-{33}\nLOEWDIN BOND ORDERS \\(THRESH 0\\.050000\\)\n-{33}
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

#### Lowdin Atomic Charges

+ Searching keywords:

```plaintext
----------------------
LOEWDIN ATOMIC CHARGES
----------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{22}\nLOEWDIN ATOMIC CHARGES\n-{22}
```

+ Visiblity: show

#### Lowdin Reduced Orbital Charges

+ Searching keywords:

```plaintext
-------------------------------
LOEWDIN REDUCED ORBITAL CHARGES
-------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{31}\nLOEWDIN REDUCED ORBITAL CHARGES\n-{31}
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

##### Timings

+ Searching keywords:

```plaintext
-------
TIMINGS
-------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{7}\nTIMINGS\n-{7}
```

+ Visiblity: show

#### ORCA Geometry Relaxation Step

+ Searching keywords:

```plaintext
------------------------------------------------------------------------------
                         ORCA GEOMETRY RELAXATION STEP
------------------------------------------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{78}\\s+ORCA GEOMETRY RELAXATION STEP\\s+-{78}
```

+ Visiblity: show

#### ORCA SCF Gradient Calculation

+ Searching keywords:

```plaintext
------------------------------------------------------------------------------
                         ORCA SCF GRADIENT CALCULATION
------------------------------------------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{78}\\s+ORCA SCF GRADIENT CALCULATION\\s+-{78}
```

+ Visiblity: show

##### Cartesian Gradient

+ Searching keywords:

```plaintext
------------------
CARTESIAN GRADIENT
------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{18}\nCARTESIAN GRADIENT\n-{18}
```

+ Visiblity: show

#### ORCA TD-DFT/TDA Calculation

+ Searching keywords:

```plaintext
------------------------------------------------------------------------------
                        ORCA TD-DFT/TDA CALCULATION
------------------------------------------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{78}\\s+ORCA TD-DFT/TDA CALCULATION\\s+-{78}
```

+ Visiblity: show

##### XC-Intergraion Grid

+ Searching keywords:

```plaintext
-------------------
XC-INTEGRATION GRID
-------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{19}\nXC-INTEGRATION GRID\n-{19}
```

+ Visiblity: show

##### TD-DFT XC Setup

+ Searching keywords:

```plaintext
---------------
TD-DFT XC SETUP
---------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{15}\nTD-DFT XC SETUP\n-{15}
```

+ Visiblity: show

##### Davidson-Diagonalization

+ Searching keywords:

```plaintext
------------------------
DAVIDSON-DIAGONALIZATION
------------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{24}\nDAVIDSON-DIAGONALIZATION\n-{24}
```

+ Visiblity: show

##### TD-DFT/TDA Excited States

+ Searching keywords:

```plaintext
-------------------------
TD-DFT/TDA EXCITED STATES
-------------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{25}\nTD-DFT/TDA EXCITED STATES\n-{25}
```

+ Visiblity: show

##### TD-DFT/TDA-Excitation Spectra

+ Searching keywords:

```plaintext
-----------------------------
TD-DFT/TDA-EXCITATION SPECTRA
-----------------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{29}\nTD-DFT/TDA-EXCITATION SPECTRA\n-{29}
```

+ Visiblity: show

##### Absorption Spectrum via Transition Electric Dipole Moments

+ Searching keywords:

```plaintext
-----------------------------------------------------------------------------
         ABSORPTION SPECTRUM VIA TRANSITION ELECTRIC DIPOLE MOMENTS
-----------------------------------------------------------------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{77}\\s+ABSORPTION SPECTRUM VIA TRANSITION ELECTRIC DIPOLE MOMENTS\\s+-{77}
```

+ Visiblity: show

##### Absorption Spectrum via Transition Velocity Dipole Moments

+ Searching keywords:

```plaintext
-----------------------------------------------------------------------------
         ABSORPTION SPECTRUM VIA TRANSITION VELOCITY DIPOLE MOMENTS
-----------------------------------------------------------------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{77}\\s+ABSORPTION SPECTRUM VIA TRANSITION VELOCITY DIPOLE MOMENTS\\s+-{77}
```

+ Visiblity: show

##### CIS/TD-DFT Total Energy

+ Searching keywords:

```plaintext
-----------------------
CIS/TD-DFT TOTAL ENERGY
-----------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{23}\nCIS/TD-DFT TOTAL ENERGY\n-{23}
```

+ Visiblity: show

##### Final Single Point Energy

+ Searching keywords:

```plaintext
FINAL SINGLE POINT ENERGY
```

+ Heading level: 4

+ Regular expression:

```plaintext
FINAL SINGLE POINT ENERGY
```

+ Visiblity: show

#### NEVPT2

+ Searching keywords:

```plaintext
----------------------------------------------------------------
                           < NEVPT2  >                          
----------------------------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{64}\\s+< NEVPT2  >\\s+-{64}
```

+ Visiblity: show

##### RI-Transformation

+ Searching keywords:

```plaintext
-----------------
RI-TRANSFORMATION
-----------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{17}\nRI-TRANSFORMATION.*\n-{17}
```

+ Visiblity: show

#### NEVPT2 Results

+ Searching keywords:

```plaintext
 ===============================================================
                       NEVPT2 Results  
 ===============================================================
```

+ Heading level: 3

+ Regular expression:

```plaintext
\s*={63}\\s+NEVPT2 Results\\s+\s*={63}
```

+ Visiblity: show

##### NEVPT2 Total Energies

+ Searching keywords:

```plaintext
-----------------------
 NEVPT2 TOTAL ENERGIES
-----------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{23}\n NEVPT2 TOTAL ENERGIES\n-{23}
```

+ Visiblity: show

##### NEVPT2 Transition Energies

+ Searching keywords:

```plaintext
-----------------------------
 NEVPT2 TRANSITION ENERGIES
------------------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{29}\n NEVPT2 TRANSITION ENERGIES\n-{30}
```

##### NEVPT2 Correlation to the Transition Energy

+ Searching keywords:

```plaintext
--------------------------------------------
 NEVPT2 CORRECTION TO THE TRANSITION ENERGY
--------------------------------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{44}\n NEVPT2 CORRECTION TO THE TRANSITION ENERGY\n-{44}
```

+ Visiblity: show

##### Timings NEVPT2

+ Searching keywords:

```plaintext
--------------
TIMINGS NEVPT2
--------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{14}\nTIMINGS NEVPT2\n-{14}
```

+ Visiblity: show

#### CASSCF UV, CD spectra and dipole moments

+ Searching keywords:

```plaintext
==========================================
CASSCF UV, CD spectra and dipole moments
==========================================
```

+ Heading level: 3

+ Regular expression:

```plaintext
={20,}\\s+CASSCF\(?.*?\)? UV, CD spectra and dipole moments\\s*={20,}
```

+ Visiblity: show

##### Absorption Spectrum

+ Searching keywords:

```plaintext
------------------------------------------------------------------------------------------
                                ABSORPTION SPECTRUM
------------------------------------------------------------------------------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{30,}\\s+ABSORPTION SPECTRUM\\s+-{30,}
```

+ Visiblity: show

##### CD Spectrum

+ Searching keywords:

```plaintext
------------------------------------------------------------------------------
                             CD SPECTRUM
------------------------------------------------------------------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{30,}\\s+CD SPECTRUM\\s+-{30,}
```

+ Visiblity: show

##### CD Spectrum via Transition Velocity Dipole Moments

+ Searching keywords:

```plaintext
-------------------------------------------------------------------
         CD SPECTRUM VIA TRANSITION VELOCITY DIPOLE MOMENTS        
-------------------------------------------------------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{67,}\\s+CD SPECTRUM VIA TRANSITION VELOCITY DIPOLE MOMENTS\\s+-{67,}
```

+ Visiblity: show

##### Dipole Moments

+ Searching keywords:

```plaintext
------------------------------------------------------------------------------
                                 DIPOLE MOMENTS
------------------------------------------------------------------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{30,}\\s+DIPOLE MOMENTS\\s+-{30,}
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

#### ORCA SCF Hessian

+ Searching keywords:

```plaintext
-------------------------------------------------------------------------------
                               ORCA SCF HESSIAN
-------------------------------------------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext

-{79}\\s+ORCA SCF HESSIAN\\s+-{79}
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

##### The Polarisability Tensor

+ Searching keywords:

```plaintext
-------------------------
THE POLARIZABILITY TENSOR
-------------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{25}\nTHE POLARIZABILITY TENSOR\n-{25}
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

#### ORCA Numerical Frequencies

+ Searching keywords:

```plaintext
----------------------------------------------------------------------------
                           ORCA NUMERICAL FREQUENCIES
----------------------------------------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{76}\\s+ORCA NUMERICAL FREQUENCIES\\s+-{76}
```

+ Visiblity: show

##### Vibrational Frequencies

+ Searching keywords:

```plaintext
-----------------------
VIBRATIONAL FREQUENCIES
-----------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{23}\nVIBRATIONAL FREQUENCIES\n-{23}
```

+ Visiblity: show

##### Normal Modes

+ Searching keywords:

```plaintext
------------
NORMAL MODES
------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{12}\nNORMAL MODES\n-{12}
```

+ Visiblity: show

##### IR Spectrum

+ Searching keywords:

```plaintext
-----------
IR SPECTRUM
-----------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{11}\nIR SPECTRUM\n-{11}
```

+ Visiblity: show

##### Raman Spectrum

+ Searching keywords:

```plaintext
--------------
RAMAN SPECTRUM  
--------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{15}\nRAMAN SPECTRUM  \n-{15}
```

+ Visiblity: show

##### Thermochemistry

+ Searching keywords:

```plaintext
--------------------------
THERMOCHEMISTRY AT 298.15K
--------------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{10,}\nTHERMOCHEMISTRY.*\n-{10,}
```

+ Visiblity: show

##### Inner Energy

+ Searching keywords:

```plaintext
------------
INNER ENERGY
------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{12}\nINNER ENERGY\n-{12}
```

+ Visiblity: show

##### Enthalpy

+ Searching keywords:

```plaintext
--------
ENTHALPY
--------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{8}\nENTHALPY\n-{8}
```

+ Visiblity: show

##### Entropy

+ Searching keywords:

```plaintext
-------
ENTROPY
-------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{7}\nENTROPY\n-{7}
```

+ Visiblity: show

##### Gibbs Free Energy

+ Searching keywords:

```plaintext
-------------------
GIBBS FREE ENERGY
-------------------
```

+ Heading level: 4

+ Regular expression:

```plaintext
-{19}\nGIBBS FREE ENERGY\n-{19}
```

+ Visiblity: show

#### ORCA Excited State Dynamics

+ Searching keywords:

```plaintext
------------------------------------------------------------------------------
                           ORCA EXCITED STATE DYNAMICS
------------------------------------------------------------------------------
```

+ Heading level: 3

+ Regular expression:

```plaintext
-{78}\\s+ORCA EXCITED STATE DYNAMICS\\s+-{78}
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
