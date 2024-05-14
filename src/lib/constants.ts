export const navbarLinks = [
  {
    id: 1,
    label: 'Home',
    route: './'
  },
  {
    id: 2,
    label: 'Contacts',
    route: './contacts'
  }
]

export type NavbarLink = {
  id: number
  label: string
  route: string
}

export type PeriodicTableElement = {
  name: string
  appearance: string | null
  atomic_mass: number
  boil: number | null
  category: string
  density: number | null
  discovered_by: string | null
  melt: number | null
  molar_heat: number | null
  named_by: string | null
  number: number
  period: number
  group: number
  phase: string
  source: string
  bohr_model_image: string | null
  bohr_model_3d: string | null
  spectral_img: string | null
  summery?: string
  symbol: string
  xpos: number
  ypos: number
  wxpos: number
  wypos: number
  shells: number[]
  electron_configuration: string
  electron_configuration_semantic: string
  electron_affinity: number | null
  electronegativity_pauling: number | null
  ionization_energies: number[]
  'cpk-hex': string | null
  image: {
    attribution: string
    title: string
    url: string
  }
  block: string
}

export const periodicTableElements = [
  {
    name: 'Hydrogen',
    appearance: 'colorless gas',
    atomic_mass: 1.008,
    boil: 20.271,
    category: 'diatomic nonmetal',
    density: 0.08988,
    discovered_by: 'Henry Cavendish',
    melt: 13.99,
    molar_heat: 28.836,
    named_by: 'Antoine Lavoisier',
    number: 1,
    period: 1,
    group: 1,
    phase: 'Gas',
    source: 'https://en.wikipedia.org/wiki/Hydrogen',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_001_hydrogen/element_001_hydrogen_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_001_hydrogen/element_001_hydrogen.glb',
    spectral_img: 'https://en.wikipedia.org/wiki/File:Hydrogen_Spectra.jpg',
    summary:
      'Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.',
    symbol: 'H',
    xpos: 1,
    ypos: 1,
    wxpos: 1,
    wypos: 1,
    shells: [1],
    electron_configuration: '1s1',
    electron_configuration_semantic: '1s1',
    electron_affinity: 72.769,
    electronegativity_pauling: 2.2,
    ionization_energies: [1312],
    'cpk-hex': 'ffffff',
    image: {
      title:
        'Vial of glowing ultrapure hydrogen, H2. Original size in cm: 1 x 5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Hydrogenglow.jpg',
      attribution:
        'User:Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/hydrogen.php'
    },
    block: 's'
  },
  {
    name: 'Helium',
    appearance:
      'colorless gas, exhibiting a red-orange glow when placed in a high-voltage electric field',
    atomic_mass: 4.0026022,
    boil: 4.222,
    category: 'noble gas',
    density: 0.1786,
    discovered_by: 'Pierre Janssen',
    melt: 0.95,
    molar_heat: null,
    named_by: null,
    number: 2,
    period: 1,
    group: 18,
    phase: 'Gas',
    source: 'https://en.wikipedia.org/wiki/Helium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_002_helium/element_002_helium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_002_helium/element_002_helium.glb',
    spectral_img: 'https://en.wikipedia.org/wiki/File:Helium_spectrum.jpg',
    summary:
      'Helium is a chemical element with symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas that heads the noble gas group in the periodic table. Its boiling and melting points are the lowest among all the elements.',
    symbol: 'He',
    xpos: 18,
    ypos: 1,
    wxpos: 32,
    wypos: 1,
    shells: [2],
    electron_configuration: '1s2',
    electron_configuration_semantic: '1s2',
    electron_affinity: -48,
    electronegativity_pauling: null,
    ionization_energies: [2372.3, 5250.5],
    'cpk-hex': 'd9ffff',
    image: {
      title: 'Vial of glowing ultrapure helium. Original size in cm: 1 x 5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Helium-glow.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/helium.php'
    },
    block: 's'
  },
  {
    name: 'Lithium',
    appearance: 'silvery-white',
    atomic_mass: 6.94,
    boil: 1603,
    category: 'alkali metal',
    density: 0.534,
    discovered_by: 'Johan August Arfwedson',
    melt: 453.65,
    molar_heat: 24.86,
    named_by: null,
    number: 3,
    period: 2,
    group: 1,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Lithium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_003_lithium/element_003_lithium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_003_lithium/element_003_lithium.glb',
    spectral_img: null,
    summary:
      'Lithium (from Greek:λίθος lithos, "stone") is a chemical element with the symbol Li and atomic number 3. It is a soft, silver-white metal belonging to the alkali metal group of chemical elements. Under standard conditions it is the lightest metal and the least dense solid element.',
    symbol: 'Li',
    xpos: 1,
    ypos: 2,
    wxpos: 1,
    wypos: 2,
    shells: [2, 1],
    electron_configuration: '1s2 2s1',
    electron_configuration_semantic: '[He] 2s1',
    electron_affinity: 59.6326,
    electronegativity_pauling: 0.98,
    ionization_energies: [520.2, 7298.1, 11815],
    'cpk-hex': 'cc80ff',
    image: {
      title:
        '0.5 Grams Lithium under Argon. Original size of the largest piece in cm: 0.3 x 4',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/0.5_grams_lithium_under_argon.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/lithium.php'
    },
    block: 's'
  },
  {
    name: 'Beryllium',
    appearance: 'white-gray metallic',
    atomic_mass: 9.01218315,
    boil: 2742,
    category: 'alkaline earth metal',
    density: 1.85,
    discovered_by: 'Louis Nicolas Vauquelin',
    melt: 1560,
    molar_heat: 16.443,
    named_by: null,
    number: 4,
    period: 2,
    group: 2,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Beryllium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_004_beryllium/element_004_beryllium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_004_beryllium/element_004_beryllium.glb',
    spectral_img: null,
    summary:
      'Beryllium is a chemical element with symbol Be and atomic number 4. It is created through stellar nucleosynthesis and is a relatively rare element in the universe. It is a divalent element which occurs naturally only in combination with other elements in minerals.',
    symbol: 'Be',
    xpos: 2,
    ypos: 2,
    wxpos: 2,
    wypos: 2,
    shells: [2, 2],
    electron_configuration: '1s2 2s2',
    electron_configuration_semantic: '[He] 2s2',
    electron_affinity: -48,
    electronegativity_pauling: 1.57,
    ionization_energies: [899.5, 1757.1, 14848.7, 21006.6],
    'cpk-hex': 'c2ff00',
    image: {
      title: 'Pure Beryllium bead, 2.5 grams. Original size in cm: 1 x 1.5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Beryllium_%28Be%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/beryllium.php'
    },
    block: 's'
  },
  {
    name: 'Boron',
    appearance: 'black-brown',
    atomic_mass: 10.81,
    boil: 4200,
    category: 'metalloid',
    density: 2.08,
    discovered_by: 'Joseph Louis Gay-Lussac',
    melt: 2349,
    molar_heat: 11.087,
    named_by: null,
    number: 5,
    period: 2,
    group: 13,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Boron',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_005_boron/element_005_boron_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_005_boron/element_005_boron.glb',
    spectral_img: null,
    summary:
      "Boron is a metalloid chemical element with symbol B and atomic number 5. Produced entirely by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a low-abundance element in both the Solar system and the Earth's crust. Boron is concentrated on Earth by the water-solubility of its more common naturally occurring compounds, the borate minerals.",
    symbol: 'B',
    xpos: 13,
    ypos: 2,
    wxpos: 27,
    wypos: 2,
    shells: [2, 3],
    electron_configuration: '1s2 2s2 2p1',
    electron_configuration_semantic: '[He] 2s2 2p1',
    electron_affinity: 26.989,
    electronegativity_pauling: 2.04,
    ionization_energies: [800.6, 2427.1, 3659.7, 25025.8, 32826.7],
    'cpk-hex': 'ffb5b5',
    image: {
      title:
        'Pure Crystalline Boron, front and back side. Original size in cm: 2 x 3',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Boron.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/boron.php'
    },
    block: 'p'
  },
  {
    name: 'Carbon',
    appearance: null,
    atomic_mass: 12.011,
    boil: null,
    category: 'polyatomic nonmetal',
    density: 1.821,
    discovered_by: 'Ancient Egypt',
    melt: null,
    molar_heat: 8.517,
    named_by: null,
    number: 6,
    period: 2,
    group: 14,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Carbon',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_006_carbon/element_006_carbon_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_006_carbon/element_006_carbon.glb',
    spectral_img: 'https://en.wikipedia.org/wiki/File:Carbon_Spectra.jpg',
    summary:
      'Carbon (from Latin:carbo "coal") is a chemical element with symbol C and atomic number 6. On the periodic table, it is the first (row 2) of six elements in column (group) 14, which have in common the composition of their outer electron shell. It is nonmetallic and tetravalent—making four electrons available to form covalent chemical bonds.',
    symbol: 'C',
    xpos: 14,
    ypos: 2,
    wxpos: 28,
    wypos: 2,
    shells: [2, 4],
    electron_configuration: '1s2 2s2 2p2',
    electron_configuration_semantic: '[He] 2s2 2p2',
    electron_affinity: 121.7763,
    electronegativity_pauling: 2.55,
    ionization_energies: [1086.5, 2352.6, 4620.5, 6222.7, 37831, 47277],
    'cpk-hex': '909090',
    image: {
      title: 'Element 6 - Carbon',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Pure_Carbon.png',
      attribution:
        'Texas Lane, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons'
    },
    block: 'p'
  },
  {
    name: 'Nitrogen',
    appearance: 'colorless gas, liquid or solid',
    atomic_mass: 14.007,
    boil: 77.355,
    category: 'diatomic nonmetal',
    density: 1.251,
    discovered_by: 'Daniel Rutherford',
    melt: 63.15,
    molar_heat: null,
    named_by: 'Jean-Antoine Chaptal',
    number: 7,
    period: 2,
    group: 15,
    phase: 'Gas',
    source: 'https://en.wikipedia.org/wiki/Nitrogen',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_007_nitrogen/element_007_nitrogen_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_007_nitrogen/element_007_nitrogen.glb',
    spectral_img: 'https://en.wikipedia.org/wiki/File:Nitrogen_Spectra.jpg',
    summary:
      'Nitrogen is a chemical element with symbol N and atomic number 7. It is the lightest pnictogen and at room temperature, it is a transparent, odorless diatomic gas. Nitrogen is a common element in the universe, estimated at about seventh in total abundance in the Milky Way and the Solar System.',
    symbol: 'N',
    xpos: 15,
    ypos: 2,
    wxpos: 29,
    wypos: 2,
    shells: [2, 5],
    electron_configuration: '1s2 2s2 2p3',
    electron_configuration_semantic: '[He] 2s2 2p3',
    electron_affinity: -6.8,
    electronegativity_pauling: 3.04,
    ionization_energies: [1402.3, 2856, 4578.1, 7475, 9444.9, 53266.6, 64360],
    'cpk-hex': '3050f8',
    image: {
      title:
        'Vial of Glowing Ultrapure Nitrogen, N2. Original size in cm: 1 x 5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Nitrogen-glow.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/nitrogen.php'
    },
    block: 'p'
  },
  {
    name: 'Oxygen',
    appearance: null,
    atomic_mass: 15.999,
    boil: 90.188,
    category: 'diatomic nonmetal',
    density: 1.429,
    discovered_by: 'Carl Wilhelm Scheele',
    melt: 54.36,
    molar_heat: null,
    named_by: 'Antoine Lavoisier',
    number: 8,
    period: 2,
    group: 16,
    phase: 'Gas',
    source: 'https://en.wikipedia.org/wiki/Oxygen',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_008_oxygen/element_008_oxygen_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_008_oxygen/element_008_oxygen.glb',
    spectral_img: 'https://en.wikipedia.org/wiki/File:Oxygen_spectre.jpg',
    summary:
      'Oxygen is a chemical element with symbol O and atomic number 8. It is a member of the chalcogen group on the periodic table and is a highly reactive nonmetal and oxidizing agent that readily forms compounds (notably oxides) with most elements. By mass, oxygen is the third-most abundant element in the universe, after hydrogen and helium.',
    symbol: 'O',
    xpos: 16,
    ypos: 2,
    wxpos: 30,
    wypos: 2,
    shells: [2, 6],
    electron_configuration: '1s2 2s2 2p4',
    electron_configuration_semantic: '[He] 2s2 2p4',
    electron_affinity: 140.976,
    electronegativity_pauling: 3.44,
    ionization_energies: [
      1313.9, 3388.3, 5300.5, 7469.2, 10989.5, 13326.5, 71330, 84078
    ],
    'cpk-hex': 'ff0d0d',
    image: {
      title: 'Liquid Oxygen in a Beaker',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Liquid_oxygen_in_a_beaker_%28cropped_and_retouched%29.jpg',
      attribution:
        'Staff Sgt. Nika Glover, U.S. Air Force, Public domain, via Wikimedia Commons'
    },
    block: 'p'
  },
  {
    name: 'Fluorine',
    appearance: null,
    atomic_mass: 18.9984031636,
    boil: 85.03,
    category: 'diatomic nonmetal',
    density: 1.696,
    discovered_by: 'André-Marie Ampère',
    melt: 53.48,
    molar_heat: null,
    named_by: 'Humphry Davy',
    number: 9,
    period: 2,
    group: 17,
    phase: 'Gas',
    source: 'https://en.wikipedia.org/wiki/Fluorine',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_009_fluorine/element_009_fluorine_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_009_fluorine/element_009_fluorine.glb',
    spectral_img: null,
    summary:
      'Fluorine is a chemical element with symbol F and atomic number 9. It is the lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard conditions. As the most electronegative element, it is extremely reactive:almost all other elements, including some noble gases, form compounds with fluorine.',
    symbol: 'F',
    xpos: 17,
    ypos: 2,
    wxpos: 31,
    wypos: 2,
    shells: [2, 7],
    electron_configuration: '1s2 2s2 2p5',
    electron_configuration_semantic: '[He] 2s2 2p5',
    electron_affinity: 328.1649,
    electronegativity_pauling: 3.98,
    ionization_energies: [
      1681, 3374.2, 6050.4, 8407.7, 11022.7, 15164.1, 17868, 92038.1, 106434.3
    ],
    'cpk-hex': '90e050',
    image: {
      title: 'Liquid Fluorine at -196°C',
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Fluoro_liquido_a_-196%C2%B0C_1.jpg',
      attribution:
        'Fulvio314, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons'
    },
    block: 'p'
  },
  {
    name: 'Neon',
    appearance:
      'colorless gas exhibiting an orange-red glow when placed in a high voltage electric field',
    atomic_mass: 20.17976,
    boil: 27.104,
    category: 'noble gas',
    density: 0.9002,
    discovered_by: 'Morris Travers',
    melt: 24.56,
    molar_heat: null,
    named_by: null,
    number: 10,
    period: 2,
    group: 18,
    phase: 'Gas',
    source: 'https://en.wikipedia.org/wiki/Neon',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_010_neon/element_010_neon_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_010_neon/element_010_neon.glb',
    spectral_img: 'https://en.wikipedia.org/wiki/File:Neon_spectra.jpg',
    summary:
      'Neon is a chemical element with symbol Ne and atomic number 10. It is in group 18 (noble gases) of the periodic table. Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about two-thirds the density of air.',
    symbol: 'Ne',
    xpos: 18,
    ypos: 2,
    wxpos: 32,
    wypos: 2,
    shells: [2, 8],
    electron_configuration: '1s2 2s2 2p6',
    electron_configuration_semantic: '[He] 2s2 2p6',
    electron_affinity: -116,
    electronegativity_pauling: null,
    ionization_energies: [
      2080.7, 3952.3, 6122, 9371, 12177, 15238, 19999, 23069.5, 115379.5, 131432
    ],
    'cpk-hex': 'b3e3f5',
    image: {
      title: 'Vial of Glowing Ultrapure neon. Original size in cm: 1 x 5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Neon-glow.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/neon.php'
    },
    block: 'p'
  },
  {
    name: 'Sodium',
    appearance: 'silvery white metallic',
    atomic_mass: 22.989769282,
    boil: 1156.09,
    category: 'alkali metal',
    density: 0.968,
    discovered_by: 'Humphry Davy',
    melt: 370.944,
    molar_heat: 28.23,
    named_by: null,
    number: 11,
    period: 3,
    group: 1,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Sodium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_011_sodium/element_011_sodium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_011_sodium/element_011_sodium.glb',
    spectral_img: 'https://en.wikipedia.org/wiki/File:Sodium_Spectra.jpg',
    summary:
      'Sodium /ˈsoʊdiəm/ is a chemical element with symbol Na (from Ancient Greek Νάτριο) and atomic number 11. It is a soft, silver-white, highly reactive metal. In the Periodic table it is in column 1 (alkali metals), and shares with the other six elements in that column that it has a single electron in its outer shell, which it readily donates, creating a positively charged atom - a cation.',
    symbol: 'Na',
    xpos: 1,
    ypos: 3,
    wxpos: 1,
    wypos: 3,
    shells: [2, 8, 1],
    electron_configuration: '1s2 2s2 2p6 3s1',
    electron_configuration_semantic: '[Ne] 3s1',
    electron_affinity: 52.867,
    electronegativity_pauling: 0.93,
    ionization_energies: [
      495.8, 4562, 6910.3, 9543, 13354, 16613, 20117, 25496, 28932, 141362,
      159076
    ],
    'cpk-hex': 'ab5cf2',
    image: {
      title: 'Na (Sodium) Metal',
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Na_%28Sodium%29.jpg',
      attribution:
        'The original uploader was Dnn87 at English Wikipedia., CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons'
    },
    block: 's'
  },
  {
    name: 'Magnesium',
    appearance: 'shiny grey solid',
    atomic_mass: 24.305,
    boil: 1363,
    category: 'alkaline earth metal',
    density: 1.738,
    discovered_by: 'Joseph Black',
    melt: 923,
    molar_heat: 24.869,
    named_by: null,
    number: 12,
    period: 3,
    group: 2,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Magnesium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_012_magnesium/element_012_magnesium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_012_magnesium/element_012_magnesium.glb',
    spectral_img: 'https://en.wikipedia.org/wiki/File:Magnesium_Spectra.jpg',
    summary:
      'Magnesium is a chemical element with symbol Mg and atomic number 12. It is a shiny gray solid which bears a close physical resemblance to the other five elements in the second column (Group 2, or alkaline earth metals) of the periodic table:they each have the same electron configuration in their outer electron shell producing a similar crystal structure. Magnesium is the ninth most abundant element in the universe.',
    symbol: 'Mg',
    xpos: 2,
    ypos: 3,
    wxpos: 2,
    wypos: 3,
    shells: [2, 8, 2],
    electron_configuration: '1s2 2s2 2p6 3s2',
    electron_configuration_semantic: '[Ne] 3s2',
    electron_affinity: -40,
    electronegativity_pauling: 1.31,
    ionization_energies: [
      737.7, 1450.7, 7732.7, 10542.5, 13630, 18020, 21711, 25661, 31653, 35458,
      169988, 189368
    ],
    'cpk-hex': '8aff00',
    image: {
      title: 'Magnesium crystals',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Magnesium_crystals.jpg',
      attribution:
        'Warut Roonguthai, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons'
    },
    block: 's'
  },
  {
    name: 'Aluminium',
    appearance: 'silvery gray metallic',
    atomic_mass: 26.98153857,
    boil: 2743,
    category: 'post-transition metal',
    density: 2.7,
    discovered_by: null,
    melt: 933.47,
    molar_heat: 24.2,
    named_by: 'Humphry Davy',
    number: 13,
    period: 3,
    group: 13,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Aluminium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_013_aluminum/element_013_aluminum_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_013_aluminum/element_013_aluminum.glb',
    spectral_img: null,
    summary:
      "Aluminium (or aluminum; see different endings) is a chemical element in the boron group with symbol Al and atomic number 13. It is a silvery-white, soft, nonmagnetic, ductile metal. Aluminium is the third most abundant element (after oxygen and silicon), and the most abundant metal, in the Earth's crust.",
    symbol: 'Al',
    xpos: 13,
    ypos: 3,
    wxpos: 27,
    wypos: 3,
    shells: [2, 8, 3],
    electron_configuration: '1s2 2s2 2p6 3s2 3p1',
    electron_configuration_semantic: '[Ne] 3s2 3p1',
    electron_affinity: 41.762,
    electronegativity_pauling: 1.61,
    ionization_energies: [
      577.5, 1816.7, 2744.8, 11577, 14842, 18379, 23326, 27465, 31853, 38473,
      42647, 201266, 222316
    ],
    'cpk-hex': 'bfa6a6',
    image: {
      title: 'Pure aluminium foil. Original size in cm: 5 x 5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Aluminium.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/aluminium.php '
    },
    block: 'p'
  },
  {
    name: 'Silicon',
    appearance: 'crystalline, reflective with bluish-tinged faces',
    atomic_mass: 28.085,
    boil: 3538,
    category: 'metalloid',
    density: 2.329,
    discovered_by: 'Jöns Jacob Berzelius',
    melt: 1687,
    molar_heat: 19.789,
    named_by: 'Thomas Thomson (chemist)',
    number: 14,
    period: 3,
    group: 14,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Silicon',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_014_silicon/element_014_silicon_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_014_silicon/element_014_silicon.glb',
    spectral_img: 'https://en.wikipedia.org/wiki/File:Silicon_Spectra.jpg',
    summary:
      "Silicon is a chemical element with symbol Si and atomic number 14. It is a tetravalent metalloid, more reactive than germanium, the metalloid directly below it in the table. Controversy about silicon's character dates to its discovery.",
    symbol: 'Si',
    xpos: 14,
    ypos: 3,
    wxpos: 28,
    wypos: 3,
    shells: [2, 8, 4],
    electron_configuration: '1s2 2s2 2p6 3s2 3p2',
    electron_configuration_semantic: '[Ne] 3s2 3p2',
    electron_affinity: 134.0684,
    electronegativity_pauling: 1.9,
    ionization_energies: [
      786.5, 1577.1, 3231.6, 4355.5, 16091, 19805, 23780, 29287, 33878, 38726,
      45962, 50502, 235196, 257923
    ],
    'cpk-hex': 'f0c8a0',
    image: {
      title: 'Chunk of Ultrapure Silicon, 2 x 2 cm',
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Silicon.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/silicon.php'
    },
    block: 'p'
  },
  {
    name: 'Phosphorus',
    appearance: 'colourless, waxy white, yellow, scarlet, red, violet, black',
    atomic_mass: 30.9737619985,
    boil: null,
    category: 'polyatomic nonmetal',
    density: 1.823,
    discovered_by: 'Hennig Brand',
    melt: null,
    molar_heat: 23.824,
    named_by: null,
    number: 15,
    period: 3,
    group: 15,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Phosphorus',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_015_phosphorus/element_015_phosphorus_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_015_phosphorus/element_015_phosphorus.glb',
    spectral_img: null,
    summary:
      'Phosphorus is a chemical element with symbol P and atomic number 15. As an element, phosphorus exists in two major forms—white phosphorus and red phosphorus—but due to its high reactivity, phosphorus is never found as a free element on Earth. Instead phosphorus-containing minerals are almost always present in their maximally oxidised state, as inorganic phosphate rocks.',
    symbol: 'P',
    xpos: 15,
    ypos: 3,
    wxpos: 29,
    wypos: 3,
    shells: [2, 8, 5],
    electron_configuration: '1s2 2s2 2p6 3s2 3p3',
    electron_configuration_semantic: '[Ne] 3s2 3p3',
    electron_affinity: 72.037,
    electronegativity_pauling: 2.19,
    ionization_energies: [
      1011.8, 1907, 2914.1, 4963.6, 6273.9, 21267, 25431, 29872, 35905, 40950,
      46261, 54110, 59024, 271791, 296195
    ],
    'cpk-hex': 'ff8000',
    image: {
      title: 'Purple Phosphorus',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Phosphorus-purple.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/phosphorus.php'
    },
    block: 'p'
  },
  {
    name: 'Sulfur',
    appearance: 'lemon yellow sintered microcrystals',
    atomic_mass: 32.06,
    boil: 717.8,
    category: 'polyatomic nonmetal',
    density: 2.07,
    discovered_by: 'Ancient china',
    melt: 388.36,
    molar_heat: 22.75,
    named_by: null,
    number: 16,
    period: 3,
    group: 16,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Sulfur',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_016_sulfur/element_016_sulfur_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_016_sulfur/element_016_sulfur.glb',
    spectral_img: 'https://en.wikipedia.org/wiki/File:Sulfur_Spectrum.jpg',
    summary:
      'Sulfur or sulphur (see spelling differences) is a chemical element with symbol S and atomic number 16. It is an abundant, multivalent non-metal. Under normal conditions, sulfur atoms form cyclic octatomic molecules with chemical formula S8.',
    symbol: 'S',
    xpos: 16,
    ypos: 3,
    wxpos: 30,
    wypos: 3,
    shells: [2, 8, 6],
    electron_configuration: '1s2 2s2 2p6 3s2 3p4',
    electron_configuration_semantic: '[Ne] 3s2 3p4',
    electron_affinity: 200.4101,
    electronegativity_pauling: 2.58,
    ionization_energies: [
      999.6, 2252, 3357, 4556, 7004.3, 8495.8, 27107, 31719, 36621, 43177,
      48710, 54460, 62930, 68216, 311048, 337138
    ],
    'cpk-hex': 'ffff30',
    image: {
      title: 'Native Sulfur From Russia',
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Native_sulfur_%28Vodinskoe_Deposit%3B_quarry_near_Samara%2C_Russia%29_9.jpg',
      attribution:
        'James St. John, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons'
    },
    block: 'p'
  },
  {
    name: 'Chlorine',
    appearance: 'pale yellow-green gas',
    atomic_mass: 35.45,
    boil: 239.11,
    category: 'diatomic nonmetal',
    density: 3.2,
    discovered_by: 'Carl Wilhelm Scheele',
    melt: 171.6,
    molar_heat: null,
    named_by: null,
    number: 17,
    period: 3,
    group: 17,
    phase: 'Gas',
    source: 'https://en.wikipedia.org/wiki/Chlorine',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_017_chlorine/element_017_chlorine_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_017_chlorine/element_017_chlorine.glb',
    spectral_img:
      'https://en.wikipedia.org/wiki/File:Chlorine_spectrum_visible.png',
    summary:
      'Chlorine is a chemical element with symbol Cl and atomic number 17. It also has a relative atomic mass of 35.5. Chlorine is in the halogen group (17) and is the second lightest halogen following fluorine.',
    symbol: 'Cl',
    xpos: 17,
    ypos: 3,
    wxpos: 31,
    wypos: 3,
    shells: [2, 8, 7],
    electron_configuration: '1s2 2s2 2p6 3s2 3p5',
    electron_configuration_semantic: '[Ne] 3s2 3p5',
    electron_affinity: 348.575,
    electronegativity_pauling: 3.16,
    ionization_energies: [
      1251.2, 2298, 3822, 5158.6, 6542, 9362, 11018, 33604, 38600, 43961, 51068,
      57119, 63363, 72341, 78095, 352994, 380760
    ],
    'cpk-hex': '1ff01f',
    image: {
      title: 'A Sample of Chlorine',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Chlorine-sample-flip.jpg',
      attribution: 'Benjah-bmm27, Public domain, via Wikimedia Commons'
    },
    block: 'p'
  },
  {
    name: 'Argon',
    appearance:
      'colorless gas exhibiting a lilac/violet glow when placed in a high voltage electric field',
    atomic_mass: 39.9481,
    boil: 87.302,
    category: 'noble gas',
    density: 1.784,
    discovered_by: 'Lord Rayleigh',
    melt: 83.81,
    molar_heat: null,
    named_by: null,
    number: 18,
    period: 3,
    group: 18,
    phase: 'Gas',
    source: 'https://en.wikipedia.org/wiki/Argon',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_018_argon/element_018_argon_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_018_argon/element_018_argon.glb',
    spectral_img: 'https://en.wikipedia.org/wiki/File:Argon_Spectrum.png',
    summary:
      "Argon is a chemical element with symbol Ar and atomic number 18. It is in group 18 of the periodic table and is a noble gas. Argon is the third most common gas in the Earth's atmosphere, at 0.934% (9,340 ppmv), making it over twice as abundant as the next most common atmospheric gas, water vapor (which averages about 4000 ppmv, but varies greatly), and 23 times as abundant as the next most common non-condensing atmospheric gas, carbon dioxide (400 ppmv), and more than 500 times as abundant as the next most common noble gas, neon (18 ppmv).",
    symbol: 'Ar',
    xpos: 18,
    ypos: 3,
    wxpos: 32,
    wypos: 3,
    shells: [2, 8, 8],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6',
    electron_configuration_semantic: '[Ne] 3s2 3p6',
    electron_affinity: -96,
    electronegativity_pauling: null,
    ionization_energies: [
      1520.6, 2665.8, 3931, 5771, 7238, 8781, 11995, 13842, 40760, 46186, 52002,
      59653, 66199, 72918, 82473, 88576, 397605, 427066
    ],
    'cpk-hex': '80d1e3',
    image: {
      title: 'Vial of glowing ultrapure argon. Original size in cm: 1 x 5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Argon-glow.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/argon.php'
    },
    block: 'p'
  },
  {
    name: 'Potassium',
    appearance: 'silvery gray',
    atomic_mass: 39.09831,
    boil: 1032,
    category: 'alkali metal',
    density: 0.862,
    discovered_by: 'Humphry Davy',
    melt: 336.7,
    molar_heat: 29.6,
    named_by: null,
    number: 19,
    period: 4,
    group: 1,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Potassium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_019_potassium/element_019_potassium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_019_potassium/element_019_potassium.glb',
    spectral_img: 'https://en.wikipedia.org/wiki/File:Potassium_Spectrum.jpg',
    summary:
      'Potassium is a chemical element with symbol K (derived from Neo-Latin, kalium) and atomic number 19. It was first isolated from potash, the ashes of plants, from which its name is derived. In the Periodic table, potassium is one of seven elements in column (group) 1 (alkali metals):they all have a single valence electron in their outer electron shell, which they readily give up to create an atom with a positive charge - a cation, and combine with anions to form salts.',
    symbol: 'K',
    xpos: 1,
    ypos: 4,
    wxpos: 1,
    wypos: 4,
    shells: [2, 8, 8, 1],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s1',
    electron_configuration_semantic: '[Ar] 4s1',
    electron_affinity: 48.383,
    electronegativity_pauling: 0.82,
    ionization_energies: [
      418.8, 3052, 4420, 5877, 7975, 9590, 11343, 14944, 16963.7, 48610, 54490,
      60730, 68950, 75900, 83080, 93400, 99710, 444880, 476063
    ],
    'cpk-hex': '8f40d4',
    image: {
      title: 'Potassium Pieces',
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Potassium.JPG',
      attribution:
        'Dnn87, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons'
    },
    block: 's'
  },
  {
    name: 'Calcium',
    appearance: null,
    atomic_mass: 40.0784,
    boil: 1757,
    category: 'alkaline earth metal',
    density: 1.55,
    discovered_by: 'Humphry Davy',
    melt: 1115,
    molar_heat: 25.929,
    named_by: null,
    number: 20,
    period: 4,
    group: 2,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Calcium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_020_calcium/element_020_calcium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_020_calcium/element_020_calcium.glb',
    spectral_img: 'https://en.wikipedia.org/wiki/File:Calcium_Spectrum.png',
    summary:
      "Calcium is a chemical element with symbol Ca and atomic number 20. Calcium is a soft gray alkaline earth metal, fifth-most-abundant element by mass in the Earth's crust. The ion Ca2+ is also the fifth-most-abundant dissolved ion in seawater by both molarity and mass, after sodium, chloride, magnesium, and sulfate.",
    symbol: 'Ca',
    xpos: 2,
    ypos: 4,
    wxpos: 2,
    wypos: 4,
    shells: [2, 8, 8, 2],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2',
    electron_configuration_semantic: '[Ar] 4s2',
    electron_affinity: 2.37,
    electronegativity_pauling: 1,
    ionization_energies: [
      589.8, 1145.4, 4912.4, 6491, 8153, 10496, 12270, 14206, 18191, 20385,
      57110, 63410, 70110, 78890, 86310, 94000, 104900, 111711, 494850, 527762
    ],
    'cpk-hex': '3dff00',
    image: {
      title: 'Calcium Grains, grain size about 1 mm',
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Calcium.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/calcium.php'
    },
    block: 's'
  },
  {
    name: 'Scandium',
    appearance: 'silvery white',
    atomic_mass: 44.9559085,
    boil: 3109,
    category: 'transition metal',
    density: 2.985,
    discovered_by: 'Lars Fredrik Nilson',
    melt: 1814,
    molar_heat: 25.52,
    named_by: null,
    number: 21,
    period: 4,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Scandium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_021_scandium/element_021_scandium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_021_scandium/element_021_scandium.glb',
    spectral_img: null,
    summary:
      'Scandium is a chemical element with symbol Sc and atomic number 21. A silvery-white metallic d-block element, it has historically been sometimes classified as a rare earth element, together with yttrium and the lanthanoids. It was discovered in 1879 by spectral analysis of the minerals euxenite and gadolinite from Scandinavia.',
    symbol: 'Sc',
    xpos: 3,
    ypos: 4,
    wxpos: 17,
    wypos: 4,
    shells: [2, 8, 9, 2],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d1',
    electron_configuration_semantic: '[Ar] 3d1 4s2',
    electron_affinity: 18,
    electronegativity_pauling: 1.36,
    ionization_energies: [
      633.1, 1235, 2388.6, 7090.6, 8843, 10679, 13310, 15250, 17370, 21726,
      24102, 66320, 73010, 80160, 89490, 97400, 105600, 117000, 124270, 547530,
      582163
    ],
    'cpk-hex': 'e6e6e6',
    image: {
      title: 'Crystal of Scandium. About 1g',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Scandium%2C_Sc.jpg',
      attribution:
        'JanDerChemiker, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons'
    },
    block: 'd'
  },
  {
    name: 'Titanium',
    appearance: 'silvery grey-white metallic',
    atomic_mass: 47.8671,
    boil: 3560,
    category: 'transition metal',
    density: 4.506,
    discovered_by: 'William Gregor',
    melt: 1941,
    molar_heat: 25.06,
    named_by: 'Martin Heinrich Klaproth',
    number: 22,
    period: 4,
    group: 4,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Titanium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_022_titanium/element_022_titanium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_022_titanium/element_022_titanium.glb',
    spectral_img: null,
    summary:
      'Titanium is a chemical element with symbol Ti and atomic number 22. It is a lustrous transition metal with a silver color, low density and high strength. It is highly resistant to corrosion in sea water, aqua regia and chlorine.',
    symbol: 'Ti',
    xpos: 4,
    ypos: 4,
    wxpos: 18,
    wypos: 4,
    shells: [2, 8, 10, 2],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d2',
    electron_configuration_semantic: '[Ar] 3d2 4s2',
    electron_affinity: 7.289,
    electronegativity_pauling: 1.54,
    ionization_energies: [
      658.8, 1309.8, 2652.5, 4174.6, 9581, 11533, 13590, 16440, 18530, 20833,
      25575, 28125, 76015, 83280, 90880, 100700, 109100, 117800, 129900, 137530,
      602930, 639294
    ],
    'cpk-hex': 'bfc2c7',
    image: {
      title:
        'Titanium Crystal made with the van Arkel-de Booer Process. 87 grams, Original size in cm: 2.5 x 4',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Titanium.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/titanium.php'
    },
    block: 'd'
  },
  {
    name: 'Vanadium',
    appearance: 'blue-silver-grey metal',
    atomic_mass: 50.94151,
    boil: 3680,
    category: 'transition metal',
    density: 6,
    discovered_by: 'Andrés Manuel del Río',
    melt: 2183,
    molar_heat: 24.89,
    named_by: 'Isotopes of vanadium',
    number: 23,
    period: 4,
    group: 5,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Vanadium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_023_vanadium/element_023_vanadium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_023_vanadium/element_023_vanadium.glb',
    spectral_img: null,
    summary:
      'Vanadium is a chemical element with symbol V and atomic number 23. It is a hard, silvery grey, ductile and malleable transition metal. The element is found only in chemically combined form in nature, but once isolated artificially, the formation of an oxide layer stabilizes the free metal somewhat against further oxidation.',
    symbol: 'V',
    xpos: 5,
    ypos: 4,
    wxpos: 19,
    wypos: 4,
    shells: [2, 8, 11, 2],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d3',
    electron_configuration_semantic: '[Ar] 3d3 4s2',
    electron_affinity: 50.911,
    electronegativity_pauling: 1.63,
    ionization_energies: [
      650.9, 1414, 2830, 4507, 6298.7, 12363, 14530, 16730, 19860, 22240, 24670,
      29730, 32446, 86450, 94170, 102300, 112700, 121600, 130700, 143400,
      151440, 661050, 699144
    ],
    'cpk-hex': 'a6a6ab',
    image: {
      title: 'Pieces of Pure Vanadium with Oxide Layer',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Vanadium-pieces.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/vanadium.php'
    },
    block: 'd'
  },
  {
    name: 'Chromium',
    appearance: 'silvery metallic',
    atomic_mass: 51.99616,
    boil: 2944,
    category: 'transition metal',
    density: 7.19,
    discovered_by: 'Louis Nicolas Vauquelin',
    melt: 2180,
    molar_heat: 23.35,
    named_by: null,
    number: 24,
    period: 4,
    group: 6,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Chromium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_024_chromium/element_024_chromium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_024_chromium/element_024_chromium.glb',
    spectral_img: null,
    summary:
      'Chromium is a chemical element with symbol Cr and atomic number 24. It is the first element in Group 6. It is a steely-gray, lustrous, hard and brittle metal which takes a high polish, resists tarnishing, and has a high melting point.',
    symbol: 'Cr',
    xpos: 6,
    ypos: 4,
    wxpos: 20,
    wypos: 4,
    shells: [2, 8, 13, 1],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s1 3d5',
    electron_configuration_semantic: '[Ar] 3d5 4s1',
    electron_affinity: 65.21,
    electronegativity_pauling: 1.66,
    ionization_energies: [
      652.9, 1590.6, 2987, 4743, 6702, 8744.9, 15455, 17820, 20190, 23580,
      26130, 28750, 34230, 37066, 97510, 105800, 114300, 125300, 134700, 144300,
      157700, 166090, 721870, 761733
    ],
    'cpk-hex': '8a99c7',
    image: {
      title: 'Piece of Chromium Metal',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Chromium.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/chromium.php'
    },
    block: 'd'
  },
  {
    name: 'Manganese',
    appearance: 'silvery metallic',
    atomic_mass: 54.9380443,
    boil: 2334,
    category: 'transition metal',
    density: 7.21,
    discovered_by: 'Torbern Olof Bergman',
    melt: 1519,
    molar_heat: 26.32,
    named_by: null,
    number: 25,
    period: 4,
    group: 7,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Manganese',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_025_manganese/element_025_manganese_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_025_manganese/element_025_manganese.glb',
    spectral_img: null,
    summary:
      'Manganese is a chemical element with symbol Mn and atomic number 25. It is not found as a free element in nature; it is often found in combination with iron, and in many minerals. Manganese is a metal with important industrial metal alloy uses, particularly in stainless steels.',
    symbol: 'Mn',
    xpos: 7,
    ypos: 4,
    wxpos: 21,
    wypos: 4,
    shells: [2, 8, 13, 2],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d5',
    electron_configuration_semantic: '[Ar] 3d5 4s2',
    electron_affinity: -50,
    electronegativity_pauling: 1.55,
    ionization_energies: [
      717.3, 1509, 3248, 4940, 6990, 9220, 11500, 18770, 21400, 23960, 27590,
      30330, 33150, 38880, 41987, 109480, 118100, 127100, 138600, 148500,
      158600, 172500, 181380, 785450, 827067
    ],
    'cpk-hex': '9c7ac7',
    image: {
      title: 'Two Oieces of Manganese Metal',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Manganese_element.jpg',
      attribution:
        'W. Oelen, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons'
    },
    block: 'd'
  },
  {
    name: 'Iron',
    appearance: 'lustrous metallic with a grayish tinge',
    atomic_mass: 55.8452,
    boil: 3134,
    category: 'transition metal',
    density: 7.874,
    discovered_by: '5000 BC',
    melt: 1811,
    molar_heat: 25.1,
    named_by: null,
    number: 26,
    period: 4,
    group: 8,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Iron',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_026_iron/element_026_iron_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_026_iron/element_026_iron.glb',
    spectral_img: 'https://en.wikipedia.org/wiki/File:Iron_Spectrum.jpg',
    summary:
      "Iron is a chemical element with symbol Fe (from Latin:ferrum) and atomic number 26. It is a metal in the first transition series. It is by mass the most common element on Earth, forming much of Earth's outer and inner core.",
    symbol: 'Fe',
    xpos: 8,
    ypos: 4,
    wxpos: 22,
    wypos: 4,
    shells: [2, 8, 14, 2],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d6',
    electron_configuration_semantic: '[Ar] 3d6 4s2',
    electron_affinity: 14.785,
    electronegativity_pauling: 1.83,
    ionization_energies: [
      762.5, 1561.9, 2957, 5290, 7240, 9560, 12060, 14580, 22540, 25290, 28000,
      31920, 34830, 37840, 44100, 47206, 122200, 131000, 140500, 152600, 163000,
      173600, 188100, 195200, 851800, 895161
    ],
    'cpk-hex': 'e06633',
    image: {
      title:
        'Fragments of an iron meteorite, about 92% iron. Original size of the single pieces in cm: 0.4 - 0.8',
      url: 'https://images-of-elements.com/iron-2.jpg',
      attribution:
        'Chemical ELements A Virtual Museum, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0> source: https://images-of-elements.com/iron.php'
    },
    block: 'd'
  },
  {
    name: 'Cobalt',
    appearance: 'hard lustrous gray metal',
    atomic_mass: 58.9331944,
    boil: 3200,
    category: 'transition metal',
    density: 8.9,
    discovered_by: 'Georg Brandt',
    melt: 1768,
    molar_heat: 24.81,
    named_by: null,
    number: 27,
    period: 4,
    group: 9,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Cobalt',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_027_cobalt/element_027_cobalt_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_027_cobalt/element_027_cobalt.glb',
    spectral_img: null,
    summary:
      "Cobalt is a chemical element with symbol Co and atomic number 27. Like nickel, cobalt in the Earth's crust is found only in chemically combined form, save for small deposits found in alloys of natural meteoric iron. The free element, produced by reductive smelting, is a hard, lustrous, silver-gray metal.",
    symbol: 'Co',
    xpos: 9,
    ypos: 4,
    wxpos: 23,
    wypos: 4,
    shells: [2, 8, 15, 2],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d7',
    electron_configuration_semantic: '[Ar] 3d7 4s2',
    electron_affinity: 63.898,
    electronegativity_pauling: 1.88,
    ionization_energies: [
      760.4, 1648, 3232, 4950, 7670, 9840, 12440, 15230, 17959, 26570, 29400,
      32400, 36600, 39700, 42800, 49396, 52737, 134810, 145170, 154700, 167400,
      178100, 189300, 204500, 214100, 920870, 966023
    ],
    'cpk-hex': 'f090a0',
    image: {
      title:
        'Fractions from a cobalt, 7 and 4 grams. Original size in cm: 2 x 2',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Cobalt_ore_2.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/cobalt.php'
    },
    block: 'd'
  },
  {
    name: 'Nickel',
    appearance: 'lustrous, metallic, and silver with a gold tinge',
    atomic_mass: 58.69344,
    boil: 3003,
    category: 'transition metal',
    density: 8.908,
    discovered_by: 'Axel Fredrik Cronstedt',
    melt: 1728,
    molar_heat: 26.07,
    named_by: null,
    number: 28,
    period: 4,
    group: 10,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Nickel',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_028_nickel/element_028_nickel_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_028_nickel/element_028_nickel.glb',
    spectral_img: null,
    summary:
      'Nickel is a chemical element with symbol Ni and atomic number 28. It is a silvery-white lustrous metal with a slight golden tinge. Nickel belongs to the transition metals and is hard and ductile.',
    symbol: 'Ni',
    xpos: 10,
    ypos: 4,
    wxpos: 24,
    wypos: 4,
    shells: [2, 8, 16, 2],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d8',
    electron_configuration_semantic: '[Ar] 3d8 4s2',
    electron_affinity: 111.65,
    electronegativity_pauling: 1.91,
    ionization_energies: [
      737.1, 1753, 3395, 5300, 7339, 10400, 12800, 15600, 18600, 21670, 30970,
      34000, 37100, 41500, 44800, 48100, 55101, 58570, 148700, 159000, 169400,
      182700, 194000, 205600, 221400, 231490, 992718, 1039668
    ],
    'cpk-hex': '50d050',
    image: {
      title: 'Nickel Chunk',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Nickel_chunk.jpg',
      attribution:
        'Materialscientist at English Wikipedia, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons'
    },
    block: 'd'
  },
  {
    name: 'Copper',
    appearance: 'red-orange metallic luster',
    atomic_mass: 63.5463,
    boil: 2835,
    category: 'transition metal',
    density: 8.96,
    discovered_by: 'Middle East',
    melt: 1357.77,
    molar_heat: 24.44,
    named_by: null,
    number: 29,
    period: 4,
    group: 11,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Copper',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_029_copper/element_029_copper_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_029_copper/element_029_copper.glb',
    spectral_img: null,
    summary:
      'Copper is a chemical element with symbol Cu (from Latin:cuprum) and atomic number 29. It is a soft, malleable and ductile metal with very high thermal and electrical conductivity. A freshly exposed surface of pure copper has a reddish-orange color.',
    symbol: 'Cu',
    xpos: 11,
    ypos: 4,
    wxpos: 25,
    wypos: 4,
    shells: [2, 8, 18, 1],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s1 3d10',
    electron_configuration_semantic: '[Ar] 3d10 4s1',
    electron_affinity: 119.235,
    electronegativity_pauling: 1.9,
    ionization_energies: [
      745.5, 1957.9, 3555, 5536, 7700, 9900, 13400, 16000, 19200, 22400, 25600,
      35600, 38700, 42000, 46700, 50200, 53700, 61100, 64702, 163700, 174100,
      184900, 198800, 210500, 222700, 239100, 249660, 1067358, 1116105
    ],
    'cpk-hex': 'c88033',
    image: {
      title: 'Macro of Native Copper about 1 ½ inches (4 cm) in size',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/NatCopper.jpg',
      attribution:
        "Native_Copper_Macro_Digon3.jpg: 'Jonathan Zander (Digon3)' derivative work: Materialscientist, CC BY-SA 2.5 <https://creativecommons.org/licenses/by-sa/2.5>, via Wikimedia Commons"
    },
    block: 'd'
  },
  {
    name: 'Zinc',
    appearance: 'silver-gray',
    atomic_mass: 65.382,
    boil: 1180,
    category: 'transition metal',
    density: 7.14,
    discovered_by: 'India',
    melt: 692.68,
    molar_heat: 25.47,
    named_by: null,
    number: 30,
    period: 4,
    group: 12,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Zinc',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_030_zinc/element_030_zinc_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_030_zinc/element_030_zinc.glb',
    spectral_img: null,
    summary:
      'Zinc, in commerce also spelter, is a chemical element with symbol Zn and atomic number 30. It is the first element of group 12 of the periodic table. In some respects zinc is chemically similar to magnesium:its ion is of similar size and its only common oxidation state is +2.',
    symbol: 'Zn',
    xpos: 12,
    ypos: 4,
    wxpos: 26,
    wypos: 4,
    shells: [2, 8, 18, 2],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10',
    electron_configuration_semantic: '[Ar] 3d10 4s2',
    electron_affinity: -58,
    electronegativity_pauling: 1.65,
    ionization_energies: [
      906.4, 1733.3, 3833, 5731, 7970, 10400, 12900, 16800, 19600, 23000, 26400,
      29990, 40490, 43800, 47300, 52300, 55900, 59700, 67300, 71200, 179100
    ],
    'cpk-hex': '7d80b0',
    image: {
      title: '30 grams Zinc, front and back side. Original size in cm: 3',
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Zinc_%2830_Zn%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/zinc.php'
    },
    block: 'd'
  },
  {
    name: 'Gallium',
    appearance: 'silver-white',
    atomic_mass: 69.7231,
    boil: 2673,
    category: 'post-transition metal',
    density: 5.91,
    discovered_by: 'Lecoq de Boisbaudran',
    melt: 302.9146,
    molar_heat: 25.86,
    named_by: null,
    number: 31,
    period: 4,
    group: 13,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Gallium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_031_gallium/element_031_gallium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_031_gallium/element_031_gallium.glb',
    spectral_img: null,
    summary:
      'Gallium is a chemical element with symbol Ga and atomic number 31. Elemental gallium does not occur in free form in nature, but as the gallium(III) compounds that are in trace amounts in zinc ores and in bauxite. Gallium is a soft, silvery metal, and elemental gallium is a brittle solid at low temperatures, and melts at 29.76 °C (85.57 °F) (slightly above room temperature).',
    symbol: 'Ga',
    xpos: 13,
    ypos: 4,
    wxpos: 27,
    wypos: 4,
    shells: [2, 8, 18, 3],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p1',
    electron_configuration_semantic: '[Ar] 3d10 4s2 4p1',
    electron_affinity: 41,
    electronegativity_pauling: 1.81,
    ionization_energies: [578.8, 1979.3, 2963, 6180],
    'cpk-hex': 'c28f8f',
    image: {
      title:
        'Solid gallium, fresh and after some time (2 months) at room temperature',
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Solid_gallium_%28Ga%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/gallium.php'
    },
    block: 'p'
  },
  {
    name: 'Germanium',
    appearance: 'grayish-white',
    atomic_mass: 72.6308,
    boil: 3106,
    category: 'metalloid',
    density: 5.323,
    discovered_by: 'Clemens Winkler',
    melt: 1211.4,
    molar_heat: 23.222,
    named_by: null,
    number: 32,
    period: 4,
    group: 14,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Germanium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_032_germanium/element_032_germanium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_032_germanium/element_032_germanium.glb',
    spectral_img: null,
    summary:
      'Germanium is a chemical element with symbol Ge and atomic number 32. It is a lustrous, hard, grayish-white metalloid in the carbon group, chemically similar to its group neighbors tin and silicon. Purified germanium is a semiconductor, with an appearance most similar to elemental silicon.',
    symbol: 'Ge',
    xpos: 14,
    ypos: 4,
    wxpos: 28,
    wypos: 4,
    shells: [2, 8, 18, 4],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p2',
    electron_configuration_semantic: '[Ar] 3d10 4s2 4p2',
    electron_affinity: 118.9352,
    electronegativity_pauling: 2.01,
    ionization_energies: [762, 1537.5, 3302.1, 4411, 9020],
    'cpk-hex': '668f8f',
    image: {
      title: '12 Grams Polycrystalline Germanium, 2*3 cm',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Polycrystalline-germanium.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/germanium.php'
    },
    block: 'p'
  },
  {
    name: 'Arsenic',
    appearance: 'metallic grey',
    atomic_mass: 74.9215956,
    boil: null,
    category: 'metalloid',
    density: 5.727,
    discovered_by: 'Bronze Age',
    melt: null,
    molar_heat: 24.64,
    named_by: null,
    number: 33,
    period: 4,
    group: 15,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Arsenic',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_033_arsenic/element_033_arsenic_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_033_arsenic/element_033_arsenic.glb',
    spectral_img: null,
    summary:
      'Arsenic is a chemical element with symbol As and atomic number 33. Arsenic occurs in many minerals, usually in conjunction with sulfur and metals, and also as a pure elemental crystal. Arsenic is a metalloid.',
    symbol: 'As',
    xpos: 15,
    ypos: 4,
    wxpos: 29,
    wypos: 4,
    shells: [2, 8, 18, 5],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3',
    electron_configuration_semantic: '[Ar] 3d10 4s2 4p3',
    electron_affinity: 77.65,
    electronegativity_pauling: 2.18,
    ionization_energies: [947, 1798, 2735, 4837, 6043, 12310],
    'cpk-hex': 'bd80e3',
    image: {
      title:
        'Ultrapure Metallic Arsenic under Argon, 1 - 2 grams. Original size of each piece in cm: 0.5 x 1',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Arsenic_%2833_As%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/arsenic.php'
    },
    block: 'p'
  },
  {
    name: 'Selenium',
    appearance: 'black, red, and gray (not pictured) allotropes',
    atomic_mass: 78.9718,
    boil: 958,
    category: 'polyatomic nonmetal',
    density: 4.81,
    discovered_by: 'Jöns Jakob Berzelius',
    melt: 494,
    molar_heat: 25.363,
    named_by: null,
    number: 34,
    period: 4,
    group: 16,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Selenium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_034_selenium/element_034_selenium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_034_selenium/element_034_selenium.glb',
    spectral_img: null,
    summary:
      'Selenium is a chemical element with symbol Se and atomic number 34. It is a nonmetal with properties that are intermediate between those of its periodic table column-adjacent chalcogen elements sulfur and tellurium. It rarely occurs in its elemental state in nature, or as pure ore compounds.',
    symbol: 'Se',
    xpos: 16,
    ypos: 4,
    wxpos: 30,
    wypos: 4,
    shells: [2, 8, 18, 6],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p4',
    electron_configuration_semantic: '[Ar] 3d10 4s2 4p4',
    electron_affinity: 194.9587,
    electronegativity_pauling: 2.55,
    ionization_energies: [941, 2045, 2973.7, 4144, 6590, 7880, 14990],
    'cpk-hex': 'ffa100',
    image: {
      title:
        'Ultrapure Black, Amorphous Selenium, 3 - 4 grams. Original size in cm: 2',
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Selenium.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/selenium.php'
    },
    block: 'p'
  },
  {
    name: 'Bromine',
    appearance: null,
    atomic_mass: 79.904,
    boil: 332,
    category: 'diatomic nonmetal',
    density: 3.1028,
    discovered_by: 'Antoine Jérôme Balard',
    melt: 265.8,
    molar_heat: null,
    named_by: null,
    number: 35,
    period: 4,
    group: 17,
    phase: 'Liquid',
    source: 'https://en.wikipedia.org/wiki/Bromine',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_035_bromine/element_035_bromine_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_035_bromine/element_035_bromine.glb',
    spectral_img: null,
    summary:
      'Bromine (from Ancient Greek:βρῶμος, brómos, meaning "stench") is a chemical element with symbol Br, and atomic number 35. It is a halogen. The element was isolated independently by two chemists, Carl Jacob Löwig and Antoine Jerome Balard, in 1825–1826.',
    symbol: 'Br',
    xpos: 17,
    ypos: 4,
    wxpos: 31,
    wypos: 4,
    shells: [2, 8, 18, 7],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5',
    electron_configuration_semantic: '[Ar] 3d10 4s2 4p5',
    electron_affinity: 324.537,
    electronegativity_pauling: 2.96,
    ionization_energies: [1139.9, 2103, 3470, 4560, 5760, 8550, 9940, 18600],
    'cpk-hex': 'a62929',
    image: {
      title:
        '99.5 % pure liquid Bromine in a 4 x 1 cm big glass ampoule, cast in acrylic',
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Bromine-ampoule.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/bromine.php'
    },
    block: 'p'
  },
  {
    name: 'Krypton',
    appearance:
      'colorless gas, exhibiting a whitish glow in a high electric field',
    atomic_mass: 83.7982,
    boil: 119.93,
    category: 'noble gas',
    density: 3.749,
    discovered_by: 'William Ramsay',
    melt: 115.78,
    molar_heat: null,
    named_by: null,
    number: 36,
    period: 4,
    group: 18,
    phase: 'Gas',
    source: 'https://en.wikipedia.org/wiki/Krypton',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_036_krypton/element_036_krypton_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_036_krypton/element_036_krypton.glb',
    spectral_img: 'https://en.wikipedia.org/wiki/File:Krypton_Spectrum.jpg',
    summary:
      'Krypton (from Greek:κρυπτός kryptos "the hidden one") is a chemical element with symbol Kr and atomic number 36. It is a member of group 18 (noble gases) elements. A colorless, odorless, tasteless noble gas, krypton occurs in trace amounts in the atmosphere, is isolated by fractionally distilling liquefied air, and is often used with other rare gases in fluorescent lamps.',
    symbol: 'Kr',
    xpos: 18,
    ypos: 4,
    wxpos: 32,
    wypos: 4,
    shells: [2, 8, 18, 8],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6',
    electron_configuration_semantic: '[Ar] 3d10 4s2 4p6',
    electron_affinity: -96,
    electronegativity_pauling: 3,
    ionization_energies: [
      1350.8, 2350.4, 3565, 5070, 6240, 7570, 10710, 12138, 22274, 25880, 29700,
      33800, 37700, 43100, 47500, 52200, 57100, 61800, 75800, 80400, 85300,
      90400, 96300, 101400, 111100, 116290, 282500, 296200, 311400, 326200
    ],
    'cpk-hex': '5cb8d1',
    image: {
      title: 'Vial of Glowing Ultrapure Krypton. Original size in cm: 1 x 5.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Krypton-glow.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/krypton.php'
    },
    block: 'p'
  },
  {
    name: 'Rubidium',
    appearance: 'grey white',
    atomic_mass: 85.46783,
    boil: 961,
    category: 'alkali metal',
    density: 1.532,
    discovered_by: 'Robert Bunsen',
    melt: 312.45,
    molar_heat: 31.06,
    named_by: null,
    number: 37,
    period: 5,
    group: 1,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Rubidium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_037_rubidium/element_037_rubidium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_037_rubidium/element_037_rubidium.glb',
    spectral_img: null,
    summary:
      'Rubidium is a chemical element with symbol Rb and atomic number 37. Rubidium is a soft, silvery-white metallic element of the alkali metal group, with an atomic mass of 85.4678. Elemental rubidium is highly reactive, with properties similar to those of other alkali metals, such as very rapid oxidation in air.',
    symbol: 'Rb',
    xpos: 1,
    ypos: 5,
    wxpos: 1,
    wypos: 5,
    shells: [2, 8, 18, 8, 1],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1',
    electron_configuration_semantic: '[Kr] 5s1',
    electron_affinity: 46.884,
    electronegativity_pauling: 0.82,
    ionization_energies: [
      403, 2633, 3860, 5080, 6850, 8140, 9570, 13120, 14500, 26740
    ],
    'cpk-hex': '702eb0',
    image: {
      title: 'Rubidium Metal Sample',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Rb5.JPG',
      attribution:
        'Dnn87, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons'
    },
    block: 's'
  },
  {
    name: 'Strontium',
    appearance: null,
    atomic_mass: 87.621,
    boil: 1650,
    category: 'alkaline earth metal',
    density: 2.64,
    discovered_by: 'William Cruickshank (chemist)',
    melt: 1050,
    molar_heat: 26.4,
    named_by: null,
    number: 38,
    period: 5,
    group: 2,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Strontium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_038_strontium/element_038_strontium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_038_strontium/element_038_strontium.glb',
    spectral_img: null,
    summary:
      'Strontium is a chemical element with symbol Sr and atomic number 38. An alkaline earth metal, strontium is a soft silver-white or yellowish metallic element that is highly reactive chemically. The metal turns yellow when it is exposed to air.',
    symbol: 'Sr',
    xpos: 2,
    ypos: 5,
    wxpos: 2,
    wypos: 5,
    shells: [2, 8, 18, 8, 2],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2',
    electron_configuration_semantic: '[Kr] 5s2',
    electron_affinity: 5.023,
    electronegativity_pauling: 0.95,
    ionization_energies: [
      549.5, 1064.2, 4138, 5500, 6910, 8760, 10230, 11800, 15600, 17100, 31270
    ],
    'cpk-hex': '00ff00',
    image: {
      title: 'Strontium Pieces under Paraffin Oil.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Strontium-1.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/strontium.php'
    },
    block: 's'
  },
  {
    name: 'Yttrium',
    appearance: 'silvery white',
    atomic_mass: 88.905842,
    boil: 3203,
    category: 'transition metal',
    density: 4.472,
    discovered_by: 'Johan Gadolin',
    melt: 1799,
    molar_heat: 26.53,
    named_by: null,
    number: 39,
    period: 5,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Yttrium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_039_yttrium/element_039_yttrium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_039_yttrium/element_039_yttrium.glb',
    spectral_img: null,
    summary:
      'Yttrium is a chemical element with symbol Y and atomic number 39. It is a silvery-metallic transition metal chemically similar to the lanthanides and it has often been classified as a "rare earth element". Yttrium is almost always found combined with the lanthanides in rare earth minerals and is never found in nature as a free element.',
    symbol: 'Y',
    xpos: 3,
    ypos: 5,
    wxpos: 17,
    wypos: 5,
    shells: [2, 8, 18, 9, 2],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1',
    electron_configuration_semantic: '[Kr] 4d1 5s2',
    electron_affinity: 29.6,
    electronegativity_pauling: 1.22,
    ionization_energies: [
      600, 1180, 1980, 5847, 7430, 8970, 11190, 12450, 14110, 18400, 19900,
      36090
    ],
    'cpk-hex': '94ffff',
    image: {
      title: '6,21g Yttrium, Reinheit mindestens 99%.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Piece_of_Yttrium.jpg',
      attribution:
        'Jan Anskeit, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons'
    },
    block: 'd'
  },
  {
    name: 'Zirconium',
    appearance: 'silvery white',
    atomic_mass: 91.2242,
    boil: 4650,
    category: 'transition metal',
    density: 6.52,
    discovered_by: 'Martin Heinrich Klaproth',
    melt: 2128,
    molar_heat: 25.36,
    named_by: null,
    number: 40,
    period: 5,
    group: 4,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Zirconium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_040_zirconium/element_040_zirconium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_040_zirconium/element_040_zirconium.glb',
    spectral_img: null,
    summary:
      'Zirconium is a chemical element with symbol Zr and atomic number 40. The name of zirconium is taken from the name of the mineral zircon, the most important source of zirconium. The word zircon comes from the Persian word zargun زرگون, meaning "gold-colored".',
    symbol: 'Zr',
    xpos: 4,
    ypos: 5,
    wxpos: 18,
    wypos: 5,
    shells: [2, 8, 18, 10, 2],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d2',
    electron_configuration_semantic: '[Kr] 4d2 5s2',
    electron_affinity: 41.806,
    electronegativity_pauling: 1.33,
    ionization_energies: [640.1, 1270, 2218, 3313, 7752, 9500],
    'cpk-hex': '94e0e0',
    image: {
      title: 'Two pieces of Zirconium, 1 cm each.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Zirconium-pieces.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/zirconium.php'
    },
    block: 'd'
  },
  {
    name: 'Niobium',
    appearance: 'gray metallic, bluish when oxidized',
    atomic_mass: 92.906372,
    boil: 5017,
    category: 'transition metal',
    density: 8.57,
    discovered_by: 'Charles Hatchett',
    melt: 2750,
    molar_heat: 24.6,
    named_by: null,
    number: 41,
    period: 5,
    group: 5,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Niobium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_041_niobium/element_041_niobium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_041_niobium/element_041_niobium.glb',
    spectral_img: null,
    summary:
      'Niobium, formerly columbium, is a chemical element with symbol Nb (formerly Cb) and atomic number 41. It is a soft, grey, ductile transition metal, which is often found in the pyrochlore mineral, the main commercial source for niobium, and columbite. The name comes from Greek mythology:Niobe, daughter of Tantalus since it is so similar to tantalum.',
    symbol: 'Nb',
    xpos: 5,
    ypos: 5,
    wxpos: 19,
    wypos: 5,
    shells: [2, 8, 18, 12, 1],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d4',
    electron_configuration_semantic: '[Kr] 4d4 5s1',
    electron_affinity: 88.516,
    electronegativity_pauling: 1.6,
    ionization_energies: [652.1, 1380, 2416, 3700, 4877, 9847, 12100],
    'cpk-hex': '73c2c9',
    image: {
      title: 'Niobium strips',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Niobium_strips.JPG',
      attribution:
        'Mauro Cateb, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons'
    },
    block: 'd'
  },
  {
    name: 'Molybdenum',
    appearance: 'gray metallic',
    atomic_mass: 95.951,
    boil: 4912,
    category: 'transition metal',
    density: 10.28,
    discovered_by: 'Carl Wilhelm Scheele',
    melt: 2896,
    molar_heat: 24.06,
    named_by: null,
    number: 42,
    period: 5,
    group: 6,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Molybdenum',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_042_molybdenum/element_042_molybdenum_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_042_molybdenum/element_042_molybdenum.glb',
    spectral_img: null,
    summary:
      'Molybdenum is a chemical element with symbol Mo and atomic number 42. The name is from Neo-Latin molybdaenum, from Ancient Greek Μόλυβδος molybdos, meaning lead, since its ores were confused with lead ores. Molybdenum minerals have been known throughout history, but the element was discovered (in the sense of differentiating it as a new entity from the mineral salts of other metals) in 1778 by Carl Wilhelm Scheele.',
    symbol: 'Mo',
    xpos: 6,
    ypos: 5,
    wxpos: 20,
    wypos: 5,
    shells: [2, 8, 18, 13, 1],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d5',
    electron_configuration_semantic: '[Kr] 4d5 5s1',
    electron_affinity: 72.1,
    electronegativity_pauling: 2.16,
    ionization_energies: [
      684.3, 1560, 2618, 4480, 5257, 6640.8, 12125, 13860, 15835, 17980, 20190,
      22219, 26930, 29196, 52490, 55000, 61400, 67700, 74000, 80400, 87000,
      93400, 98420, 104400, 121900, 127700, 133800, 139800, 148100, 154500
    ],
    'cpk-hex': '54b5b5',
    image: {
      title:
        '99.9 Pure Molybdenum Crystal, about 2 x 3 cm, with anodisation color',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Molybdenum.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/molybdenum.php'
    },
    block: 'd'
  },
  {
    name: 'Technetium',
    appearance: 'shiny gray metal',
    atomic_mass: 98,
    boil: 4538,
    category: 'transition metal',
    density: 11,
    discovered_by: 'Emilio Segrè',
    melt: 2430,
    molar_heat: 24.27,
    named_by: null,
    number: 43,
    period: 5,
    group: 7,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Technetium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_043_technetium/element_043_technetium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_043_technetium/element_043_technetium.glb',
    spectral_img: null,
    summary:
      'Technetium (/tɛkˈniːʃiəm/) is a chemical element with symbol Tc and atomic number 43. It is the element with the lowest atomic number in the periodic table that has no stable isotopes:every form of it is radioactive. Nearly all technetium is produced synthetically, and only minute amounts are found in nature.',
    symbol: 'Tc',
    xpos: 7,
    ypos: 5,
    wxpos: 21,
    wypos: 5,
    shells: [2, 8, 18, 13, 2],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d5',
    electron_configuration_semantic: '[Kr] 4d5 5s2',
    electron_affinity: 53,
    electronegativity_pauling: 1.9,
    ionization_energies: [702, 1470, 2850],
    'cpk-hex': '3b9e9e',
    image: {
      title:
        'Technetium Sample inside a sealed glass ampoule, filled with argon gas. 6x1 mm goldfoil covered with 99Tc powder (electroplated).',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Technetium-sample-cropped.jpg',
      attribution:
        'GFDL, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons'
    },
    block: 'd'
  },
  {
    name: 'Ruthenium',
    appearance: 'silvery white metallic',
    atomic_mass: 101.072,
    boil: 4423,
    category: 'transition metal',
    density: 12.45,
    discovered_by: 'Karl Ernst Claus',
    melt: 2607,
    molar_heat: 24.06,
    named_by: null,
    number: 44,
    period: 5,
    group: 8,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Ruthenium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_044_ruthenium/element_044_ruthenium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_044_ruthenium/element_044_ruthenium.glb',
    spectral_img: null,
    summary:
      'Ruthenium is a chemical element with symbol Ru and atomic number 44. It is a rare transition metal belonging to the platinum group of the periodic table. Like the other metals of the platinum group, ruthenium is inert to most other chemicals.',
    symbol: 'Ru',
    xpos: 8,
    ypos: 5,
    wxpos: 22,
    wypos: 5,
    shells: [2, 8, 18, 15, 1],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d7',
    electron_configuration_semantic: '[Kr] 4d7 5s1',
    electron_affinity: 100.96,
    electronegativity_pauling: 2.2,
    ionization_energies: [710.2, 1620, 2747],
    'cpk-hex': '248f8f',
    image: {
      title: 'Ruthenium Crystal, 0.6 grams, 0.6 x 1.3 cm size',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Ruthenium_crystal.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/ruthenium.php'
    },
    block: 'd'
  },
  {
    name: 'Rhodium',
    appearance: 'silvery white metallic',
    atomic_mass: 102.905502,
    boil: 3968,
    category: 'transition metal',
    density: 12.41,
    discovered_by: 'William Hyde Wollaston',
    melt: 2237,
    molar_heat: 24.98,
    named_by: null,
    number: 45,
    period: 5,
    group: 9,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Rhodium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_045_rhodium/element_045_rhodium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_045_rhodium/element_045_rhodium.glb',
    spectral_img: null,
    summary:
      'Rhodium is a chemical element with symbol Rh and atomic number 45. It is a rare, silvery-white, hard, and chemically inert transition metal. It is a member of the platinum group.',
    symbol: 'Rh',
    xpos: 9,
    ypos: 5,
    wxpos: 23,
    wypos: 5,
    shells: [2, 8, 18, 16, 1],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d8',
    electron_configuration_semantic: '[Kr] 4d8 5s1',
    electron_affinity: 110.27,
    electronegativity_pauling: 2.28,
    ionization_energies: [719.7, 1740, 2997],
    'cpk-hex': '0a7d8c',
    image: {
      title: 'Pure Rhodium Bead, 1 gram. Original size in cm: 0.5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Rhodium_%28Rh%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/rhodium.php'
    },
    block: 'd'
  },
  {
    name: 'Palladium',
    appearance: 'silvery white',
    atomic_mass: 106.421,
    boil: 3236,
    category: 'transition metal',
    density: 12.023,
    discovered_by: 'William Hyde Wollaston',
    melt: 1828.05,
    molar_heat: 25.98,
    named_by: null,
    number: 46,
    period: 5,
    group: 10,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Palladium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_046_palladium/element_046_palladium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_046_palladium/element_046_palladium.glb',
    spectral_img: null,
    summary:
      'Palladium is a chemical element with symbol Pd and atomic number 46. It is a rare and lustrous silvery-white metal discovered in 1803 by William Hyde Wollaston. He named it after the asteroid Pallas, which was itself named after the epithet of the Greek goddess Athena, acquired by her when she slew Pallas.',
    symbol: 'Pd',
    xpos: 10,
    ypos: 5,
    wxpos: 24,
    wypos: 5,
    shells: [2, 8, 18, 18],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10',
    electron_configuration_semantic: '[Kr] 4d10',
    electron_affinity: 54.24,
    electronegativity_pauling: 2.2,
    ionization_energies: [804.4, 1870, 3177],
    'cpk-hex': '006985',
    image: {
      title: 'Palladium Crystal, about 1 gram. Original size in cm: 0.5 x 1',
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Palladium_%2846_Pd%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/palladium.php'
    },
    block: 'd'
  },
  {
    name: 'Silver',
    appearance: 'lustrous white metal',
    atomic_mass: 107.86822,
    boil: 2435,
    category: 'transition metal',
    density: 10.49,
    discovered_by: 'unknown, before 5000 BC',
    melt: 1234.93,
    molar_heat: 25.35,
    named_by: null,
    number: 47,
    period: 5,
    group: 11,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Silver',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_047_silver/element_047_silver_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_047_silver/element_047_silver.glb',
    spectral_img: null,
    summary:
      'Silver is a chemical element with symbol Ag (Greek:άργυρος árguros, Latin:argentum, both from the Indo-European root *h₂erǵ- for "grey" or "shining") and atomic number 47. A soft, white, lustrous transition metal, it possesses the highest electrical conductivity, thermal conductivity and reflectivity of any metal. The metal occurs naturally in its pure, free form (native silver), as an alloy with gold and other metals, and in minerals such as argentite and chlorargyrite.',
    symbol: 'Ag',
    xpos: 11,
    ypos: 5,
    wxpos: 25,
    wypos: 5,
    shells: [2, 8, 18, 18, 1],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d10',
    electron_configuration_semantic: '[Kr] 4d10 5s1',
    electron_affinity: 125.862,
    electronegativity_pauling: 1.93,
    ionization_energies: [731, 2070, 3361],
    'cpk-hex': 'c0c0c0',
    image: {
      title: 'Natural silver nugget, 1 cm long.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Silver-nugget.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: http://images-of-elements.com/silver.php'
    },
    block: 'd'
  },
  {
    name: 'Cadmium',
    appearance: 'silvery bluish-gray metallic',
    atomic_mass: 112.4144,
    boil: 1040,
    category: 'transition metal',
    density: 8.65,
    discovered_by: 'Karl Samuel Leberecht Hermann',
    melt: 594.22,
    molar_heat: 26.02,
    named_by: 'Isotopes of cadmium',
    number: 48,
    period: 5,
    group: 12,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Cadmium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_048_cadmium/element_048_cadmium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_048_cadmium/element_048_cadmium.glb',
    spectral_img: null,
    summary:
      'Cadmium is a chemical element with symbol Cd and atomic number 48. This soft, bluish-white metal is chemically similar to the two other stable metals in group 12, zinc and mercury. Like zinc, it prefers oxidation state +2 in most of its compounds and like mercury it shows a low melting point compared to transition metals.',
    symbol: 'Cd',
    xpos: 12,
    ypos: 5,
    wxpos: 26,
    wypos: 5,
    shells: [2, 8, 18, 18, 2],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10',
    electron_configuration_semantic: '[Kr] 4d10 5s2',
    electron_affinity: -68,
    electronegativity_pauling: 1.69,
    ionization_energies: [867.8, 1631.4, 3616],
    'cpk-hex': 'ffd98f',
    image: {
      title: '48 Cd Cadmium',
      url: 'https://images-of-elements.com/cadmium-4.jpg',
      attribution:
        'Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/cadmium.php'
    },
    block: 'd'
  },
  {
    name: 'Indium',
    appearance: 'silvery lustrous gray',
    atomic_mass: 114.8181,
    boil: 2345,
    category: 'post-transition metal',
    density: 7.31,
    discovered_by: 'Ferdinand Reich',
    melt: 429.7485,
    molar_heat: 26.74,
    named_by: null,
    number: 49,
    period: 5,
    group: 13,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Indium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_049_indium/element_049_indium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_049_indium/element_049_indium.glb',
    spectral_img: null,
    summary:
      "Indium is a chemical element with symbol In and atomic number 49. It is a post-transition metallic element that is rare in Earth's crust. The metal is very soft, malleable and easily fusible, with a melting point higher than sodium, but lower than lithium or tin.",
    symbol: 'In',
    xpos: 13,
    ypos: 5,
    wxpos: 27,
    wypos: 5,
    shells: [2, 8, 18, 18, 3],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p1',
    electron_configuration_semantic: '[Kr] 4d10 5s2 5p1',
    electron_affinity: 37.043,
    electronegativity_pauling: 1.78,
    ionization_energies: [558.3, 1820.7, 2704, 5210],
    'cpk-hex': 'a67573',
    image: {
      title: '1.5 x 1.5 cm liquid indium',
      url: 'https://images-of-elements.com/indium-2.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: http://images-of-elements.com/indium.php'
    },
    block: 'p'
  },
  {
    name: 'Tin',
    appearance: 'silvery-white (beta, β) or gray (alpha, α)',
    atomic_mass: 118.7107,
    boil: 2875,
    category: 'post-transition metal',
    density: 7.365,
    discovered_by: 'unknown, before 3500 BC',
    melt: 505.08,
    molar_heat: 27.112,
    named_by: null,
    number: 50,
    period: 5,
    group: 14,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Tin',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_050_tin/element_050_tin_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_050_tin/element_050_tin.glb',
    spectral_img: null,
    summary:
      'Tin is a chemical element with the symbol Sn (for Latin:stannum) and atomic number 50. It is a main group metal in group 14 of the periodic table. Tin shows a chemical similarity to both neighboring group-14 elements, germanium and lead, and has two possible oxidation states, +2 and the slightly more stable +4.',
    symbol: 'Sn',
    xpos: 14,
    ypos: 5,
    wxpos: 28,
    wypos: 5,
    shells: [2, 8, 18, 18, 4],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p2',
    electron_configuration_semantic: '[Kr] 4d10 5s2 5p2',
    electron_affinity: 107.2984,
    electronegativity_pauling: 1.96,
    ionization_energies: [708.6, 1411.8, 2943, 3930.3, 7456],
    'cpk-hex': '668080',
    image: {
      title: 'Tin blob',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Tin-2.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: http://images-of-elements.com/tin.php'
    },
    block: 'p'
  },
  {
    name: 'Antimony',
    appearance: 'silvery lustrous gray',
    atomic_mass: 121.7601,
    boil: 1908,
    category: 'metalloid',
    density: 6.697,
    discovered_by: 'unknown, before 3000 BC',
    melt: 903.78,
    molar_heat: 25.23,
    named_by: null,
    number: 51,
    period: 5,
    group: 15,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Antimony',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_051_antimony/element_051_antimony_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_051_antimony/element_051_antimony.glb',
    spectral_img: null,
    summary:
      'Antimony is a chemical element with symbol Sb (from Latin:stibium) and atomic number 51. A lustrous gray metalloid, it is found in nature mainly as the sulfide mineral stibnite (Sb2S3). Antimony compounds have been known since ancient times and were used for cosmetics; metallic antimony was also known, but it was erroneously identified as lead upon its discovery.',
    symbol: 'Sb',
    xpos: 15,
    ypos: 5,
    wxpos: 29,
    wypos: 5,
    shells: [2, 8, 18, 18, 5],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p3',
    electron_configuration_semantic: '[Kr] 4d10 5s2 5p3',
    electron_affinity: 101.059,
    electronegativity_pauling: 2.05,
    ionization_energies: [834, 1594.9, 2440, 4260, 5400, 10400],
    'cpk-hex': '9e63b5',
    image: {
      title: 'Antimony crystal, 2 grams, 1 cm',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Antimony-4.jpg',
      attribution:
        'Unknown authorUnknown author, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/antimony.php'
    },
    block: 'p'
  },
  {
    name: 'Tellurium',
    appearance: null,
    atomic_mass: 127.603,
    boil: 1261,
    category: 'metalloid',
    density: 6.24,
    discovered_by: 'Franz-Joseph Müller von Reichenstein',
    melt: 722.66,
    molar_heat: 25.73,
    named_by: null,
    number: 52,
    period: 5,
    group: 16,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Tellurium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_052_tellurium/element_052_tellurium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_052_tellurium/element_052_tellurium.glb',
    spectral_img: null,
    summary:
      'Tellurium is a chemical element with symbol Te and atomic number 52. It is a brittle, mildly toxic, rare, silver-white metalloid. Tellurium is chemically related to selenium and sulfur.',
    symbol: 'Te',
    xpos: 16,
    ypos: 5,
    wxpos: 30,
    wypos: 5,
    shells: [2, 8, 18, 18, 6],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p4',
    electron_configuration_semantic: '[Kr] 4d10 5s2 5p4',
    electron_affinity: 190.161,
    electronegativity_pauling: 2.1,
    ionization_energies: [869.3, 1790, 2698, 3610, 5668, 6820, 13200],
    'cpk-hex': 'd47a00',
    image: {
      title: 'Metallic tellurium, diameter 3.5 cm',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Tellurium2.jpg',
      attribution:
        'Unknown authorUnknown author, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/tellurium.php'
    },
    block: 'p'
  },
  {
    name: 'Iodine',
    appearance: 'lustrous metallic gray, violet as a gas',
    atomic_mass: 126.904473,
    boil: 457.4,
    category: 'diatomic nonmetal',
    density: 4.933,
    discovered_by: 'Bernard Courtois',
    melt: 386.85,
    molar_heat: null,
    named_by: null,
    number: 53,
    period: 5,
    group: 17,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Iodine',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_053_iodine/element_053_iodine_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_053_iodine/element_053_iodine.glb',
    spectral_img: null,
    summary:
      'Iodine is a chemical element with symbol I and atomic number 53. The name is from Greek ἰοειδής ioeidēs, meaning violet or purple, due to the color of iodine vapor. Iodine and its compounds are primarily used in nutrition, and industrially in the production of acetic acid and certain polymers.',
    symbol: 'I',
    xpos: 17,
    ypos: 5,
    wxpos: 31,
    wypos: 5,
    shells: [2, 8, 18, 18, 7],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p5',
    electron_configuration_semantic: '[Kr] 4d10 5s2 5p5',
    electron_affinity: 295.1531,
    electronegativity_pauling: 2.66,
    ionization_energies: [1008.4, 1845.9, 3180],
    'cpk-hex': '940094',
    image: {
      title: 'Iodine Sample',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Iodine-sample.jpg',
      attribution: 'Benjah-bmm27, Public domain, via Wikimedia Commons'
    },
    block: 'p'
  },
  {
    name: 'Xenon',
    appearance:
      'colorless gas, exhibiting a blue glow when placed in a high voltage electric field',
    atomic_mass: 131.2936,
    boil: 165.051,
    category: 'noble gas',
    density: 5.894,
    discovered_by: 'William Ramsay',
    melt: 161.4,
    molar_heat: null,
    named_by: null,
    number: 54,
    period: 5,
    group: 18,
    phase: 'Gas',
    source: 'https://en.wikipedia.org/wiki/Xenon',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_054_xenon/element_054_xenon_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_054_xenon/element_054_xenon.glb',
    spectral_img: 'https://en.wikipedia.org/wiki/File:Xenon_Spectrum.jpg',
    summary:
      "Xenon is a chemical element with symbol Xe and atomic number 54. It is a colorless, dense, odorless noble gas, that occurs in the Earth's atmosphere in trace amounts. Although generally unreactive, xenon can undergo a few chemical reactions such as the formation of xenon hexafluoroplatinate, the first noble gas compound to be synthesized.",
    symbol: 'Xe',
    xpos: 18,
    ypos: 5,
    wxpos: 32,
    wypos: 5,
    shells: [2, 8, 18, 18, 8],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6',
    electron_configuration_semantic: '[Kr] 4d10 5s2 5p6',
    electron_affinity: -77,
    electronegativity_pauling: 2.6,
    ionization_energies: [1170.4, 2046.4, 3099.4],
    'cpk-hex': '429eb0',
    image: {
      title: 'Vial of glowing ultrapure xenon. Original size in cm: 1 x 5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Xenon-glow.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/xenon.php'
    },
    block: 'p'
  },
  {
    name: 'Cesium',
    appearance: 'silvery gold',
    atomic_mass: 132.905451966,
    boil: 944,
    category: 'alkali metal',
    density: 1.93,
    discovered_by: 'Robert Bunsen',
    melt: 301.7,
    molar_heat: 32.21,
    named_by: null,
    number: 55,
    period: 6,
    group: 1,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Cesium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_055_cesium/element_055_cesium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_055_cesium/element_055_cesium.glb',
    spectral_img: null,
    summary:
      'Caesium or cesium is a chemical element with symbol Cs and atomic number 55. It is a soft, silvery-gold alkali metal with a melting point of 28 °C (82 °F), which makes it one of only five elemental metals that are liquid at or near room temperature. Caesium is an alkali metal and has physical and chemical properties similar to those of rubidium and potassium.',
    symbol: 'Cs',
    xpos: 1,
    ypos: 6,
    wxpos: 1,
    wypos: 6,
    shells: [2, 8, 18, 18, 8, 1],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1',
    electron_configuration_semantic: '[Xe] 6s1',
    electron_affinity: 45.505,
    electronegativity_pauling: 0.79,
    ionization_energies: [375.7, 2234.3, 3400],
    'cpk-hex': '57178f',
    image: {
      title: 'Cesium/Caesium metal',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Cesium.jpg',
      attribution:
        'Dnn87 Contact email: Dnn87yahoo.dk, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons'
    },
    block: 's'
  },
  {
    name: 'Barium',
    appearance: null,
    atomic_mass: 137.3277,
    boil: 2118,
    category: 'alkaline earth metal',
    density: 3.51,
    discovered_by: 'Carl Wilhelm Scheele',
    melt: 1000,
    molar_heat: 28.07,
    named_by: null,
    number: 56,
    period: 6,
    group: 2,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Barium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_056_barium/element_056_barium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_056_barium/element_056_barium.glb',
    spectral_img: null,
    summary:
      'Barium is a chemical element with symbol Ba and atomic number 56. It is the fifth element in Group 2, a soft silvery metallic alkaline earth metal. Because of its high chemical reactivity barium is never found in nature as a free element.',
    symbol: 'Ba',
    xpos: 2,
    ypos: 6,
    wxpos: 2,
    wypos: 6,
    shells: [2, 8, 18, 18, 8, 2],
    electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2',
    electron_configuration_semantic: '[Xe] 6s2',
    electron_affinity: 13.954,
    electronegativity_pauling: 0.89,
    ionization_energies: [502.9, 965.2, 3600],
    'cpk-hex': '00c900',
    image: {
      title:
        '1.5 Grams Barium with a Grey Oxide Layer under Argon. Original size in cm: 0.7 x 1',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Barium_%2856_Ba%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/barium.php'
    },
    block: 's'
  },
  {
    name: 'Lanthanum',
    appearance: 'silvery white',
    atomic_mass: 138.905477,
    boil: 3737,
    category: 'lanthanide',
    density: 6.162,
    discovered_by: 'Carl Gustaf Mosander',
    melt: 1193,
    molar_heat: 27.11,
    named_by: null,
    number: 57,
    period: 6,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Lanthanum',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_057_lanthanum/element_057_lanthanum_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_057_lanthanum/element_057_lanthanum.glb',
    spectral_img: null,
    summary:
      'Lanthanum is a soft, ductile, silvery-white metallic chemical element with symbol La and atomic number 57. It tarnishes rapidly when exposed to air and is soft enough to be cut with a knife. It gave its name to the lanthanide series, a group of 15 similar elements between lanthanum and lutetium in the periodic table:it is also sometimes considered the first element of the 6th-period transition metals.',
    symbol: 'La',
    xpos: 3,
    ypos: 9,
    wxpos: 3,
    wypos: 6,
    shells: [2, 8, 18, 18, 9, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1',
    electron_configuration_semantic: '[Xe] 5d16s2',
    electron_affinity: 53,
    electronegativity_pauling: 1.1,
    ionization_energies: [538.1, 1067, 1850.3, 4819, 5940],
    'cpk-hex': '70d4ff',
    image: {
      title: '1 cm Big Piece of Pure Lanthanum',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Lanthanum.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/lanthanum.php'
    },
    block: 'f'
  },
  {
    name: 'Cerium',
    appearance: 'silvery white',
    atomic_mass: 140.1161,
    boil: 3716,
    category: 'lanthanide',
    density: 6.77,
    discovered_by: 'Martin Heinrich Klaproth',
    melt: 1068,
    molar_heat: 26.94,
    named_by: null,
    number: 58,
    period: 6,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Cerium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_058_cerium/element_058_cerium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_058_cerium/element_058_cerium.glb',
    spectral_img: null,
    summary:
      'Cerium is a chemical element with symbol Ce and atomic number 58. It is a soft, silvery, ductile metal which easily oxidizes in air. Cerium was named after the dwarf planet Ceres (itself named after the Roman goddess of agriculture).',
    symbol: 'Ce',
    xpos: 4,
    ypos: 9,
    wxpos: 4,
    wypos: 6,
    shells: [2, 8, 18, 19, 9, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1 4f1',
    electron_configuration_semantic: '[Xe] 4f1 5d1 6s2',
    electron_affinity: 55,
    electronegativity_pauling: 1.12,
    ionization_energies: [534.4, 1050, 1949, 3547, 6325, 7490],
    'cpk-hex': 'ffffc7',
    image: {
      title:
        'Ultrapure Cerium under Argon, 1.5 grams. Original size in cm: 1 x 1',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Cerium2.jpg',
      attribution:
        'Jurii, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/cerium.php'
    },
    block: 'f'
  },
  {
    name: 'Praseodymium',
    appearance: 'grayish white',
    atomic_mass: 140.907662,
    boil: 3403,
    category: 'lanthanide',
    density: 6.77,
    discovered_by: 'Carl Auer von Welsbach',
    melt: 1208,
    molar_heat: 27.2,
    named_by: null,
    number: 59,
    period: 6,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Praseodymium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_059_praseodymium/element_059_praseodymium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_059_praseodymium/element_059_praseodymium.glb',
    spectral_img: null,
    summary:
      'Praseodymium is a chemical element with symbol Pr and atomic number 59. Praseodymium is a soft, silvery, malleable and ductile metal in the lanthanide group. It is valued for its magnetic, electrical, chemical, and optical properties.',
    symbol: 'Pr',
    xpos: 5,
    ypos: 9,
    wxpos: 5,
    wypos: 6,
    shells: [2, 8, 18, 21, 8, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f3',
    electron_configuration_semantic: '[Xe] 4f3 6s2',
    electron_affinity: 93,
    electronegativity_pauling: 1.13,
    ionization_energies: [527, 1020, 2086, 3761, 5551],
    'cpk-hex': 'd9ffc7',
    image: {
      title: '1.5 Grams Praseodymium under Argon, 0.5 cm big pieces',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Praseodymium.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/praseodymium.php'
    },
    block: 'f'
  },
  {
    name: 'Neodymium',
    appearance: 'silvery white',
    atomic_mass: 144.2423,
    boil: 3347,
    category: 'lanthanide',
    density: 7.01,
    discovered_by: 'Carl Auer von Welsbach',
    melt: 1297,
    molar_heat: 27.45,
    named_by: null,
    number: 60,
    period: 6,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Neodymium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_060_neodymium/element_060_neodymium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_060_neodymium/element_060_neodymium.glb',
    spectral_img: null,
    summary:
      'Neodymium is a chemical element with symbol Nd and atomic number 60. It is a soft silvery metal that tarnishes in air. Neodymium was discovered in 1885 by the Austrian chemist Carl Auer von Welsbach.',
    symbol: 'Nd',
    xpos: 6,
    ypos: 9,
    wxpos: 6,
    wypos: 6,
    shells: [2, 8, 18, 22, 8, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f4',
    electron_configuration_semantic: '[Xe] 4f4 6s2',
    electron_affinity: 184.87,
    electronegativity_pauling: 1.14,
    ionization_energies: [533.1, 1040, 2130, 3900],
    'cpk-hex': 'c7ffc7',
    image: {
      title:
        'Ultrapure Neodymium under Argon, 5 grams. Original length of the large piece in cm: 1',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Neodymium_%2860_Nd%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/neodymium.php'
    },
    block: 'f'
  },
  {
    name: 'Promethium',
    appearance: 'metallic',
    atomic_mass: 145,
    boil: 3273,
    category: 'lanthanide',
    density: 7.26,
    discovered_by: 'Chien Shiung Wu',
    melt: 1315,
    molar_heat: null,
    named_by: 'Isotopes of promethium',
    number: 61,
    period: 6,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Promethium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_061_promethium/element_061_promethium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_061_promethium/element_061_promethium.glb',
    spectral_img: null,
    summary:
      'Promethium, originally prometheum, is a chemical element with the symbol Pm and atomic number 61. All of its isotopes are radioactive; it is one of only two such elements that are followed in the periodic table by elements with stable forms, a distinction shared with technetium. Chemically, promethium is a lanthanide, which forms salts when combined with other elements.',
    symbol: 'Pm',
    xpos: 7,
    ypos: 9,
    wxpos: 7,
    wypos: 6,
    shells: [2, 8, 18, 23, 8, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f5',
    electron_configuration_semantic: '[Xe] 4f5 6s2',
    electron_affinity: 12.45,
    electronegativity_pauling: 1.13,
    ionization_energies: [540, 1050, 2150, 3970],
    'cpk-hex': 'a3ffc7',
    image: {
      title:
        'Photomontage of what promethium metal might look like (it is too radioactive and real images are not available)',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Promethium.jpg',
      attribution:
        'Unknown authorUnknown author, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/promethium.php'
    },
    block: 'f'
  },
  {
    name: 'Samarium',
    appearance: 'silvery white',
    atomic_mass: 150.362,
    boil: 2173,
    category: 'lanthanide',
    density: 7.52,
    discovered_by: 'Lecoq de Boisbaudran',
    melt: 1345,
    molar_heat: 29.54,
    named_by: null,
    number: 62,
    period: 6,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Samarium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_062_samarium/element_062_samarium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_062_samarium/element_062_samarium.glb',
    spectral_img: null,
    summary:
      'Samarium is a chemical element with symbol Sm and atomic number 62. It is a moderately hard silvery metal that readily oxidizes in air. Being a typical member of the lanthanide series, samarium usually assumes the oxidation state +3.',
    symbol: 'Sm',
    xpos: 8,
    ypos: 9,
    wxpos: 8,
    wypos: 6,
    shells: [2, 8, 18, 24, 8, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f6',
    electron_configuration_semantic: '[Xe] 4f6 6s2',
    electron_affinity: 15.63,
    electronegativity_pauling: 1.17,
    ionization_energies: [544.5, 1070, 2260, 3990],
    'cpk-hex': '8fffc7',
    image: {
      title:
        'Ultrapure Sublimated Samarium, 2 grams. Original size in cm: 0.8 x 1.5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Samarium-2.jpg',
      attribution:
        'Unknown authorUnknown author, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/samarium.php'
    },
    block: 'f'
  },
  {
    name: 'Europium',
    appearance: null,
    atomic_mass: 151.9641,
    boil: 1802,
    category: 'lanthanide',
    density: 5.264,
    discovered_by: 'Eugène-Anatole Demarçay',
    melt: 1099,
    molar_heat: 27.66,
    named_by: null,
    number: 63,
    period: 6,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Europium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_063_europium/element_063_europium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_063_europium/element_063_europium.glb',
    spectral_img: null,
    summary:
      'Europium is a chemical element with symbol Eu and atomic number 63. It was isolated in 1901 and is named after the continent of Europe. It is a moderately hard, silvery metal which readily oxidizes in air and water.',
    symbol: 'Eu',
    xpos: 9,
    ypos: 9,
    wxpos: 9,
    wypos: 6,
    shells: [2, 8, 18, 25, 8, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7',
    electron_configuration_semantic: '[Xe] 4f7 6s2',
    electron_affinity: 11.2,
    electronegativity_pauling: 1.2,
    ionization_energies: [547.1, 1085, 2404, 4120],
    'cpk-hex': '61ffc7',
    image: {
      title:
        'Weakly Oxidized Europium, hence slightly yellowish. 1.5 grams, large piece 0.6 x 1.6 cm.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Europium.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/europium.php'
    },
    block: 'f'
  },
  {
    name: 'Gadolinium',
    appearance: 'silvery white',
    atomic_mass: 157.253,
    boil: 3273,
    category: 'lanthanide',
    density: 7.9,
    discovered_by: 'Jean Charles Galissard de Marignac',
    melt: 1585,
    molar_heat: 37.03,
    named_by: null,
    number: 64,
    period: 6,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Gadolinium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_064_gadolinium/element_064_gadolinium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_064_gadolinium/element_064_gadolinium.glb',
    spectral_img: null,
    summary:
      'Gadolinium is a chemical element with symbol Gd and atomic number 64. It is a silvery-white, malleable and ductile rare-earth metal. It is found in nature only in combined (salt) form.',
    symbol: 'Gd',
    xpos: 10,
    ypos: 9,
    wxpos: 10,
    wypos: 6,
    shells: [2, 8, 18, 25, 9, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7 5d1',
    electron_configuration_semantic: '[Xe] 4f7 5d1 6s2',
    electron_affinity: 13.22,
    electronegativity_pauling: 1.2,
    ionization_energies: [593.4, 1170, 1990, 4250],
    'cpk-hex': '45ffc7',
    image: {
      title:
        'Pure (99.95%) Amorphous Gadolinium, about 12 grams, 2 × 1.5 × 0.5 cm, cast in acrylic glass',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Gadolinium-2.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/gadolinium.php'
    },
    block: 'f'
  },
  {
    name: 'Terbium',
    appearance: 'silvery white',
    atomic_mass: 158.925352,
    boil: 3396,
    category: 'lanthanide',
    density: 8.23,
    discovered_by: 'Carl Gustaf Mosander',
    melt: 1629,
    molar_heat: 28.91,
    named_by: null,
    number: 65,
    period: 6,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Terbium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_065_terbium/element_065_terbium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_065_terbium/element_065_terbium.glb',
    spectral_img: null,
    summary:
      'Terbium is a chemical element with symbol Tb and atomic number 65. It is a silvery-white rare earth metal that is malleable, ductile and soft enough to be cut with a knife. Terbium is never found in nature as a free element, but it is contained in many minerals, including cerite, gadolinite, monazite, xenotime and euxenite.',
    symbol: 'Tb',
    xpos: 11,
    ypos: 9,
    wxpos: 11,
    wypos: 6,
    shells: [2, 8, 18, 27, 8, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f9',
    electron_configuration_semantic: '[Xe] 4f9 6s2',
    electron_affinity: 112.4,
    electronegativity_pauling: 1.1,
    ionization_energies: [565.8, 1110, 2114, 3839],
    'cpk-hex': '30ffc7',
    image: {
      title: 'Pure Terbium, 3 grams. Original size: 1 cm',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Terbium-2.jpg',
      attribution:
        'Unknown authorUnknown author, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/terbium.php'
    },
    block: 'f'
  },
  {
    name: 'Dysprosium',
    appearance: 'silvery white',
    atomic_mass: 162.5001,
    boil: 2840,
    category: 'lanthanide',
    density: 8.54,
    discovered_by: 'Lecoq de Boisbaudran',
    melt: 1680,
    molar_heat: 27.7,
    named_by: null,
    number: 66,
    period: 6,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Dysprosium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_066_dysprosium/element_066_dysprosium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_066_dysprosium/element_066_dysprosium.glb',
    spectral_img: null,
    summary:
      'Dysprosium is a chemical element with the symbol Dy and atomic number 66. It is a rare earth element with a metallic silver luster. Dysprosium is never found in nature as a free element, though it is found in various minerals, such as xenotime.',
    symbol: 'Dy',
    xpos: 12,
    ypos: 9,
    wxpos: 12,
    wypos: 6,
    shells: [2, 8, 18, 28, 8, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f10',
    electron_configuration_semantic: '[Xe] 4f10 6s2',
    electron_affinity: 33.96,
    electronegativity_pauling: 1.22,
    ionization_energies: [573, 1130, 2200, 3990],
    'cpk-hex': '1fffc7',
    image: {
      title: 'Pure Dysprosium Dendrites',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Dysprosium-2.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/dysprosium.php'
    },
    block: 'f'
  },
  {
    name: 'Holmium',
    appearance: 'silvery white',
    atomic_mass: 164.930332,
    boil: 2873,
    category: 'lanthanide',
    density: 8.79,
    discovered_by: 'Marc Delafontaine',
    melt: 1734,
    molar_heat: 27.15,
    named_by: null,
    number: 67,
    period: 6,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Holmium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_067_holmium/element_067_holmium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_067_holmium/element_067_holmium.glb',
    spectral_img: null,
    summary:
      'Holmium is a chemical element with symbol Ho and atomic number 67. Part of the lanthanide series, holmium is a rare earth element. Holmium was discovered by Swedish chemist Per Theodor Cleve.',
    symbol: 'Ho',
    xpos: 13,
    ypos: 9,
    wxpos: 13,
    wypos: 6,
    shells: [2, 8, 18, 29, 8, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f11',
    electron_configuration_semantic: '[Xe] 4f11 6s2',
    electron_affinity: 32.61,
    electronegativity_pauling: 1.23,
    ionization_energies: [581, 1140, 2204, 4100],
    'cpk-hex': '00ff9c',
    image: {
      title: 'Ultrapure Holmium, 17 grams. Original size in cm: 1.5 x 2.5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Holmium2.jpg',
      attribution:
        'Unknown authorUnknown author, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/holmium.php'
    },
    block: 'f'
  },
  {
    name: 'Erbium',
    appearance: 'silvery white',
    atomic_mass: 167.2593,
    boil: 3141,
    category: 'lanthanide',
    density: 9.066,
    discovered_by: 'Carl Gustaf Mosander',
    melt: 1802,
    molar_heat: 28.12,
    named_by: null,
    number: 68,
    period: 6,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Erbium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_068_erbium/element_068_erbium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_068_erbium/element_068_erbium.glb',
    spectral_img: null,
    summary:
      'Erbium is a chemical element in the lanthanide series, with symbol Er and atomic number 68. A silvery-white solid metal when artificially isolated, natural erbium is always found in chemical combination with other elements on Earth. As such, it is a rare earth element which is associated with several other rare elements in the mineral gadolinite from Ytterby in Sweden, where yttrium, ytterbium, and terbium were discovered.',
    symbol: 'Er',
    xpos: 14,
    ypos: 9,
    wxpos: 14,
    wypos: 6,
    shells: [2, 8, 18, 30, 8, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f12',
    electron_configuration_semantic: '[Xe] 4f12 6s2',
    electron_affinity: 30.1,
    electronegativity_pauling: 1.24,
    ionization_energies: [589.3, 1150, 2194, 4120],
    'cpk-hex': '00e675',
    image: {
      title: '9.5 Gramms Pure Erbium, 2 x 2 cm',
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Erbium-2.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/erbium.php'
    },
    block: 'f'
  },
  {
    name: 'Thulium',
    appearance: 'silvery gray',
    atomic_mass: 168.934222,
    boil: 2223,
    category: 'lanthanide',
    density: 9.32,
    discovered_by: 'Per Teodor Cleve',
    melt: 1818,
    molar_heat: 27.03,
    named_by: null,
    number: 69,
    period: 6,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Thulium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_069_thulium/element_069_thulium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_069_thulium/element_069_thulium.glb',
    spectral_img: null,
    summary:
      'Thulium is a chemical element with symbol Tm and atomic number 69. It is the thirteenth and antepenultimate (third-last) element in the lanthanide series. Like the other lanthanides, the most common oxidation state is +3, seen in its oxide, halides and other compounds.',
    symbol: 'Tm',
    xpos: 15,
    ypos: 9,
    wxpos: 15,
    wypos: 6,
    shells: [2, 8, 18, 31, 8, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f13',
    electron_configuration_semantic: '[Xe] 4f13 6s2',
    electron_affinity: 99,
    electronegativity_pauling: 1.25,
    ionization_energies: [596.7, 1160, 2285, 4120],
    'cpk-hex': '00d452',
    image: {
      title:
        'Ultrapure (99.997%) Crystalline Thulium, 22.3 grams, 3 × 3 × 2 cm in size',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Thulium-2.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/thulium.php'
    },
    block: 'f'
  },
  {
    name: 'Ytterbium',
    appearance: null,
    atomic_mass: 173.0451,
    boil: 1469,
    category: 'lanthanide',
    density: 6.9,
    discovered_by: 'Jean Charles Galissard de Marignac',
    melt: 1097,
    molar_heat: 26.74,
    named_by: null,
    number: 70,
    period: 6,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Ytterbium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_070_ytterbium/element_070_ytterbium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_070_ytterbium/element_070_ytterbium.glb',
    spectral_img: null,
    summary:
      'Ytterbium is a chemical element with symbol Yb and atomic number 70. It is the fourteenth and penultimate element in the lanthanide series, which is the basis of the relative stability of its +2 oxidation state. However, like the other lanthanides, its most common oxidation state is +3, seen in its oxide, halides and other compounds.',
    symbol: 'Yb',
    xpos: 16,
    ypos: 9,
    wxpos: 16,
    wypos: 6,
    shells: [2, 8, 18, 32, 8, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14',
    electron_configuration_semantic: '[Xe] 4f14 6s2',
    electron_affinity: -1.93,
    electronegativity_pauling: 1.1,
    ionization_energies: [603.4, 1174.8, 2417, 4203],
    'cpk-hex': '00bf38',
    image: {
      title: 'Ytterbium, 0.5 x 1 cm',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Ytterbium-3.jpg',
      attribution:
        'Jurii, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/ytterbium.php'
    },
    block: 'f'
  },
  {
    name: 'Lutetium',
    appearance: 'silvery white',
    atomic_mass: 174.96681,
    boil: 3675,
    category: 'lanthanide',
    density: 9.841,
    discovered_by: 'Georges Urbain',
    melt: 1925,
    molar_heat: 26.86,
    named_by: null,
    number: 71,
    period: 6,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Lutetium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_071_lutetium/element_071_lutetium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_071_lutetium/element_071_lutetium.glb',
    spectral_img: null,
    summary:
      'Lutetium is a chemical element with symbol Lu and atomic number 71. It is a silvery white metal, which resists corrosion in dry, but not in moist air. It is considered the first element of the 6th-period transition metals and the last element in the lanthanide series, and is traditionally counted among the rare earths.',
    symbol: 'Lu',
    xpos: 17,
    ypos: 9,
    wxpos: 17,
    wypos: 6,
    shells: [2, 8, 18, 32, 9, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d1',
    electron_configuration_semantic: '[Xe] 4f14 5d1 6s2',
    electron_affinity: 33.4,
    electronegativity_pauling: 1.27,
    ionization_energies: [523.5, 1340, 2022.3, 4370, 6445],
    'cpk-hex': '00ab24',
    image: {
      title: '1 cm Big Piece of Pure Lutetium',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Lutetium.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/lutetium.php'
    },
    block: 'd'
  },
  {
    name: 'Hafnium',
    appearance: 'steel gray',
    atomic_mass: 178.492,
    boil: 4876,
    category: 'transition metal',
    density: 13.31,
    discovered_by: 'Dirk Coster',
    melt: 2506,
    molar_heat: 25.73,
    named_by: null,
    number: 72,
    period: 6,
    group: 4,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Hafnium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_072_hafnium/element_072_hafnium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_072_hafnium/element_072_hafnium.glb',
    spectral_img:
      'https://en.wikipedia.org/wiki/File:Hafnium_spectrum_visible.png',
    summary:
      'Hafnium is a chemical element with symbol Hf and atomic number 72. A lustrous, silvery gray, tetravalent transition metal, hafnium chemically resembles zirconium and is found in zirconium minerals. Its existence was predicted by Dmitri Mendeleev in 1869, though it was not identified until 1923, making it the penultimate stable element to be discovered (rhenium was identified two years later).',
    symbol: 'Hf',
    xpos: 4,
    ypos: 6,
    wxpos: 18,
    wypos: 6,
    shells: [2, 8, 18, 32, 10, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d2',
    electron_configuration_semantic: '[Xe] 4f14 5d2 6s2',
    electron_affinity: 17.18,
    electronegativity_pauling: 1.3,
    ionization_energies: [658.5, 1440, 2250, 3216],
    'cpk-hex': '4dc2ff',
    image: {
      title: 'Electrolytic Hafnium, 22 grams. Original size in cm: 1 x 2 x 3',
      url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Hafnium_%2872_Hf%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/hafnium.php'
    },
    block: 'd'
  },
  {
    name: 'Tantalum',
    appearance: 'gray blue',
    atomic_mass: 180.947882,
    boil: 5731,
    category: 'transition metal',
    density: 16.69,
    discovered_by: 'Anders Gustaf Ekeberg',
    melt: 3290,
    molar_heat: 25.36,
    named_by: null,
    number: 73,
    period: 6,
    group: 5,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Tantalum',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_073_tantalum/element_073_tantalum_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_073_tantalum/element_073_tantalum.glb',
    spectral_img:
      'https://en.wikipedia.org/wiki/File:Tantalum_spectrum_visible.png',
    summary:
      'Tantalum is a chemical element with symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, an antihero from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.',
    symbol: 'Ta',
    xpos: 5,
    ypos: 6,
    wxpos: 19,
    wypos: 6,
    shells: [2, 8, 18, 32, 11, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d3',
    electron_configuration_semantic: '[Xe] 4f14 5d3 6s2',
    electron_affinity: 31,
    electronegativity_pauling: 1.5,
    ionization_energies: [761, 1500],
    'cpk-hex': '4da6ff',
    image: {
      title: 'Piece of tantalum, 1 cm in size',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Tantalum.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/tantalum.php'
    },
    block: 'd'
  },
  {
    name: 'Tungsten',
    appearance: 'grayish white, lustrous',
    atomic_mass: 183.841,
    boil: 6203,
    category: 'transition metal',
    density: 19.25,
    discovered_by: 'Carl Wilhelm Scheele',
    melt: 3695,
    molar_heat: 24.27,
    named_by: null,
    number: 74,
    period: 6,
    group: 6,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Tungsten',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_074_tungsten/element_074_tungsten_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_074_tungsten/element_074_tungsten.glb',
    spectral_img: null,
    summary:
      'Tungsten, also known as wolfram, is a chemical element with symbol W and atomic number 74. The word tungsten comes from the Swedish language tung sten, which directly translates to heavy stone. Its name in Swedish is volfram, however, in order to distinguish it from scheelite, which in Swedish is alternatively named tungsten.',
    symbol: 'W',
    xpos: 6,
    ypos: 6,
    wxpos: 20,
    wypos: 6,
    shells: [2, 8, 18, 32, 12, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d4',
    electron_configuration_semantic: '[Xe] 4f14 5d4 6s2',
    electron_affinity: 78.76,
    electronegativity_pauling: 2.36,
    ionization_energies: [770, 1700],
    'cpk-hex': '2194d6',
    image: {
      title:
        'Tungsten rod with oxidised surface, 80 grams. Original size in cm: 1.3 x 3',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Tungsten_rod_with_oxidised_surface.jpg',
      attribution:
        'Jurii, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/tungsten.php'
    },
    block: 'd'
  },
  {
    name: 'Rhenium',
    appearance: 'silvery-grayish',
    atomic_mass: 186.2071,
    boil: 5869,
    category: 'transition metal',
    density: 21.02,
    discovered_by: 'Masataka Ogawa',
    melt: 3459,
    molar_heat: 25.48,
    named_by: 'Walter Noddack',
    number: 75,
    period: 6,
    group: 7,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Rhenium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_075_rhenium/element_075_rhenium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_075_rhenium/element_075_rhenium.glb',
    spectral_img: null,
    summary:
      "Rhenium is a chemical element with symbol Re and atomic number 75. It is a silvery-white, heavy, third-row transition metal in group 7 of the periodic table. With an estimated average concentration of 1 part per billion (ppb), rhenium is one of the rarest elements in the Earth's crust.",
    symbol: 'Re',
    xpos: 7,
    ypos: 6,
    wxpos: 21,
    wypos: 6,
    shells: [2, 8, 18, 32, 13, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d5',
    electron_configuration_semantic: '[Xe] 4f14 5d5 6s2',
    electron_affinity: 5.8273,
    electronegativity_pauling: 1.9,
    ionization_energies: [760, 1260, 2510, 3640],
    'cpk-hex': '267dab',
    image: {
      title:
        'Pure Rhenium Bead, arc melted, 21 grams. Original size in cm: 1.5 x 1.7. Measured radiation dose <0.05 μS/h.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Pure_rhenium_bead%2C_arc_melted%2C_21_grams._Original_size_in_cm_-_1.5_x_1.7.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/rhenium.php'
    },
    block: 'd'
  },
  {
    name: 'Osmium',
    appearance: 'silvery, blue cast',
    atomic_mass: 190.233,
    boil: 5285,
    category: 'transition metal',
    density: 22.59,
    discovered_by: 'Smithson Tennant',
    melt: 3306,
    molar_heat: 24.7,
    named_by: null,
    number: 76,
    period: 6,
    group: 8,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Osmium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_076_osmium/element_076_osmium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_076_osmium/element_076_osmium.glb',
    spectral_img: null,
    summary:
      'Osmium (from Greek osme (ὀσμή) meaning "smell") is a chemical element with symbol Os and atomic number 76. It is a hard, brittle, bluish-white transition metal in the platinum group that is found as a trace element in alloys, mostly in platinum ores. Osmium is the densest naturally occurring element, with a density of 22.59 g/cm3.',
    symbol: 'Os',
    xpos: 8,
    ypos: 6,
    wxpos: 22,
    wypos: 6,
    shells: [2, 8, 18, 32, 14, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d6',
    electron_configuration_semantic: '[Xe] 4f14 5d6 6s2',
    electron_affinity: 103.99,
    electronegativity_pauling: 2.2,
    ionization_energies: [840, 1600],
    'cpk-hex': '266696',
    image: {
      title: 'Pure Osmium Bead',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Osmium-bead.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/osmium.php'
    },
    block: 'd'
  },
  {
    name: 'Iridium',
    appearance: 'silvery white',
    atomic_mass: 192.2173,
    boil: 4403,
    category: 'transition metal',
    density: 22.56,
    discovered_by: 'Smithson Tennant',
    melt: 2719,
    molar_heat: 25.1,
    named_by: null,
    number: 77,
    period: 6,
    group: 9,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Iridium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_077_iridium/element_077_iridium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_077_iridium/element_077_iridium.glb',
    spectral_img: null,
    summary:
      'Iridium is a chemical element with symbol Ir and atomic number 77. A very hard, brittle, silvery-white transition metal of the platinum group, iridium is generally credited with being the second densest element (after osmium) based on measured density, although calculations involving the space lattices of the elements show that iridium is denser. It is also the most corrosion-resistant metal, even at temperatures as high as 2000 °C. Although only certain molten salts and halogens are corrosive to solid iridium, finely divided iridium dust is much more reactive and can be flammable.',
    symbol: 'Ir',
    xpos: 9,
    ypos: 6,
    wxpos: 23,
    wypos: 6,
    shells: [2, 8, 18, 32, 15, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d7',
    electron_configuration_semantic: '[Xe] 4f14 5d7 6s2',
    electron_affinity: 150.94,
    electronegativity_pauling: 2.2,
    ionization_energies: [880, 1600],
    'cpk-hex': '175487',
    image: {
      title: 'Pieces of Pure Iridium, 1 gram. Original size: 0.1 - 0.3 cm each',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Iridium-2.jpg',
      attribution:
        'Unknown authorUnknown author, CC BY 1.0 <https://creativecommons.org/licenses/by/1.0>, via Wikimedia Commons, source: https://images-of-elements.com/iridium.php'
    },
    block: 'd'
  },
  {
    name: 'Platinum',
    appearance: 'silvery white',
    atomic_mass: 195.0849,
    boil: 4098,
    category: 'transition metal',
    density: 21.45,
    discovered_by: 'Antonio de Ulloa',
    melt: 2041.4,
    molar_heat: 25.86,
    named_by: null,
    number: 78,
    period: 6,
    group: 10,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Platinum',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_078_platinum/element_078_platinum_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_078_platinum/element_078_platinum.glb',
    spectral_img: null,
    summary:
      'Platinum is a chemical element with symbol Pt and atomic number 78. It is a dense, malleable, ductile, highly unreactive, precious, gray-white transition metal. Its name is derived from the Spanish term platina, which is literally translated into "little silver".',
    symbol: 'Pt',
    xpos: 10,
    ypos: 6,
    wxpos: 24,
    wypos: 6,
    shells: [2, 8, 18, 32, 17, 1],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d9',
    electron_configuration_semantic: '[Xe] 4f14 5d9 6s1',
    electron_affinity: 205.041,
    electronegativity_pauling: 2.28,
    ionization_energies: [870, 1791],
    'cpk-hex': 'd0d0e0',
    image: {
      title: 'Crystals of Pure Platinum grown by gas phase transport',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Platinum_crystals.jpg',
      attribution:
        'Periodictableru, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons'
    },
    block: 'd'
  },
  {
    name: 'Gold',
    appearance: 'metallic yellow',
    atomic_mass: 196.9665695,
    boil: 3243,
    category: 'transition metal',
    density: 19.3,
    discovered_by: 'Middle East',
    melt: 1337.33,
    molar_heat: 25.418,
    named_by: null,
    number: 79,
    period: 6,
    group: 11,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Gold',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_079_gold/element_079_gold_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_079_gold/element_079_gold.glb',
    spectral_img: null,
    summary:
      'Gold is a chemical element with symbol Au (from Latin:aurum) and atomic number 79. In its purest form, it is a bright, slightly reddish yellow, dense, soft, malleable and ductile metal. Chemically, gold is a transition metal and a group 11 element.',
    symbol: 'Au',
    xpos: 11,
    ypos: 6,
    wxpos: 25,
    wypos: 6,
    shells: [2, 8, 18, 32, 18, 1],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d10',
    electron_configuration_semantic: '[Xe] 4f14 5d10 6s1',
    electron_affinity: 222.747,
    electronegativity_pauling: 2.54,
    ionization_energies: [890.1, 1980],
    'cpk-hex': 'ffd123',
    image: {
      title: 'Ultrapure Gold Leaf',
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Gold_%2879_Au%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/gold.php'
    },
    block: 'd'
  },
  {
    name: 'Mercury',
    appearance: 'silvery',
    atomic_mass: 200.5923,
    boil: 629.88,
    category: 'transition metal',
    density: 13.534,
    discovered_by: 'unknown, before 2000 BCE',
    melt: 234.321,
    molar_heat: 27.983,
    named_by: null,
    number: 80,
    period: 6,
    group: 12,
    phase: 'Liquid',
    source: 'https://en.wikipedia.org/wiki/Mercury (Element)',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_080_mercury/element_080_mercury_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_080_mercury/element_080_mercury.glb',
    spectral_img: null,
    summary:
      'Mercury is a chemical element with symbol Hg and atomic number 80. It is commonly known as quicksilver and was formerly named hydrargyrum (/haɪˈdrɑːrdʒərəm/). A heavy, silvery d-block element, mercury is the only metallic element that is liquid at standard conditions for temperature and pressure; the only other element that is liquid under these conditions is bromine, though metals such as caesium, gallium, and rubidium melt just above room temperature.',
    symbol: 'Hg',
    xpos: 12,
    ypos: 6,
    wxpos: 26,
    wypos: 6,
    shells: [2, 8, 18, 32, 18, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10',
    electron_configuration_semantic: '[Xe] 4f14 5d10 6s2',
    electron_affinity: -48,
    electronegativity_pauling: 2,
    ionization_energies: [1007.1, 1810, 3300],
    'cpk-hex': 'b8b8d0',
    image: {
      title: '6 grams pure mercury. Diameter of the inner disc: 2 cm',
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Hydrargyrum_%2880_Hg%29.jpg',
      attribution:
        'Hi-Res Images of Chemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/mercury.php'
    },
    block: 'd'
  },
  {
    name: 'Thallium',
    appearance: 'silvery white',
    atomic_mass: 204.38,
    boil: 1746,
    category: 'post-transition metal',
    density: 11.85,
    discovered_by: 'William Crookes',
    melt: 577,
    molar_heat: 26.32,
    named_by: null,
    number: 81,
    period: 6,
    group: 13,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Thallium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_081_thallium/element_081_thallium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_081_thallium/element_081_thallium.glb',
    spectral_img: null,
    summary:
      'Thallium is a chemical element with symbol Tl and atomic number 81. This soft gray post-transition metal is not found free in nature. When isolated, it resembles tin, but discolors when exposed to air.',
    symbol: 'Tl',
    xpos: 13,
    ypos: 6,
    wxpos: 27,
    wypos: 6,
    shells: [2, 8, 18, 32, 18, 3],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p1',
    electron_configuration_semantic: '[Xe] 4f14 5d10 6s2 6p1',
    electron_affinity: 36.4,
    electronegativity_pauling: 1.62,
    ionization_energies: [589.4, 1971, 2878],
    'cpk-hex': 'a6544d',
    image: {
      title:
        '8 grams pure thallium under argon. Original size in cm: 0.7 x 1.5',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Thallium_%2881_Tl%29.jpg',
      attribution:
        'Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/thallium.php'
    },
    block: 'p'
  },
  {
    name: 'Lead',
    appearance: 'metallic gray',
    atomic_mass: 207.21,
    boil: 2022,
    category: 'post-transition metal',
    density: 11.34,
    discovered_by: 'Middle East',
    melt: 600.61,
    molar_heat: 26.65,
    named_by: null,
    number: 82,
    period: 6,
    group: 14,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Lead_(element)',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_082_lead/element_082_lead_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_082_lead/element_082_lead.glb',
    spectral_img: null,
    summary:
      'Lead (/lɛd/) is a chemical element in the carbon group with symbol Pb (from Latin:plumbum) and atomic number 82. Lead is a soft, malleable and heavy post-transition metal. Metallic lead has a bluish-white color after being freshly cut, but it soon tarnishes to a dull grayish color when exposed to air.',
    symbol: 'Pb',
    xpos: 14,
    ypos: 6,
    wxpos: 28,
    wypos: 6,
    shells: [2, 8, 18, 32, 18, 4],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p2',
    electron_configuration_semantic: '[Xe] 4f14 5d10 6s2 6p2',
    electron_affinity: 34.4204,
    electronegativity_pauling: 1.87,
    ionization_energies: [715.6, 1450.5, 3081.5, 4083, 6640],
    'cpk-hex': '575961',
    image: {
      title: 'Ultrapure Lead Bead from two sides. Original size in cm: 1.5 x 2',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Lead-2.jpg',
      attribution:
        'Chemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/lead.php'
    },
    block: 'p'
  },
  {
    name: 'Bismuth',
    appearance: 'lustrous silver',
    atomic_mass: 208.980401,
    boil: 1837,
    category: 'post-transition metal',
    density: 9.78,
    discovered_by: 'Claude François Geoffroy',
    melt: 544.7,
    molar_heat: 25.52,
    named_by: null,
    number: 83,
    period: 6,
    group: 15,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Bismuth',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_083_bismuth/element_083_bismuth_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_083_bismuth/element_083_bismuth.glb',
    spectral_img: null,
    summary:
      'Bismuth is a chemical element with symbol Bi and atomic number 83. Bismuth, a pentavalent post-transition metal, chemically resembles arsenic and antimony. Elemental bismuth may occur naturally, although its sulfide and oxide form important commercial ores.',
    symbol: 'Bi',
    xpos: 15,
    ypos: 6,
    wxpos: 29,
    wypos: 6,
    shells: [2, 8, 18, 32, 18, 5],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p3',
    electron_configuration_semantic: '[Xe] 4f14 5d10 6s2 6p3',
    electron_affinity: 90.924,
    electronegativity_pauling: 2.02,
    ionization_energies: [703, 1610, 2466, 4370, 5400, 8520],
    'cpk-hex': '9e4fb5',
    image: {
      title: 'Bismuth Crystal',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Bismuth-2.jpg',
      attribution:
        'Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/bismuth.php'
    },
    block: 'p'
  },
  {
    name: 'Polonium',
    appearance: 'silvery',
    atomic_mass: 209,
    boil: 1235,
    category: 'post-transition metal',
    density: 9.196,
    discovered_by: 'Pierre Curie',
    melt: 527,
    molar_heat: 26.4,
    named_by: null,
    number: 84,
    period: 6,
    group: 16,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Polonium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_084_polonium/element_084_polonium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_084_polonium/element_084_polonium.glb',
    spectral_img: null,
    summary:
      'Polonium is a chemical element with symbol Po and atomic number 84, discovered in 1898 by Marie Curie and Pierre Curie. A rare and highly radioactive element with no stable isotopes, polonium is chemically similar to bismuth and tellurium, and it occurs in uranium ores. Applications of polonium are few.',
    symbol: 'Po',
    xpos: 16,
    ypos: 6,
    wxpos: 30,
    wypos: 6,
    shells: [2, 8, 18, 32, 18, 6],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p4',
    electron_configuration_semantic: '[Xe] 4f14 5d10 6s2 6p4',
    electron_affinity: 136,
    electronegativity_pauling: 2,
    ionization_energies: [812.1],
    'cpk-hex': 'ab5c00',
    image: {
      title:
        'This is only an illustration, not polonium itself. A silvery, radioactive metal, producing so much heat that it gets liquid and ionizes the surrounding air',
      url: 'https://images-of-elements.com/polonium.jpg',
      attribution:
        'Chemical ELements A Virtual Museum, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0> source: https://images-of-elements.com/polonium.php'
    },
    block: 'p'
  },
  {
    name: 'Astatine',
    appearance: 'unknown, probably metallic',
    atomic_mass: 210,
    boil: 610,
    category: 'metalloid',
    density: 6.35,
    discovered_by: 'Dale R. Corson',
    melt: 575,
    molar_heat: null,
    named_by: null,
    number: 85,
    period: 6,
    group: 17,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Astatine',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_085_astatine/element_085_astatine_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_085_astatine/element_085_astatine.glb',
    spectral_img: null,
    summary:
      'Astatine is a very rare radioactive chemical element with the chemical symbol At and atomic number 85. It occurs on Earth as the decay product of various heavier elements. All its isotopes are short-lived; the most stable is astatine-210, with a half-life of 8.1 hours.',
    symbol: 'At',
    xpos: 17,
    ypos: 6,
    wxpos: 31,
    wypos: 6,
    shells: [2, 8, 18, 32, 18, 7],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p5',
    electron_configuration_semantic: '[Xe] 4f14 5d10 6s2 6p5',
    electron_affinity: 233,
    electronegativity_pauling: 2.2,
    ionization_energies: [899.003],
    'cpk-hex': '754f45',
    image: {
      title:
        'This is only an illustration, not astatine itself. Crystals similar to iodine, but darker in color than these, which due to the extreme radioactivity glow blue and evaporate to dark purple gas',
      url: 'https://images-of-elements.com/astatine.jpg',
      attribution:
        'Chemical ELements A Virtual Museum, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0> source: https://images-of-elements.com/astatine.php'
    },
    block: 'p'
  },
  {
    name: 'Radon',
    appearance:
      'colorless gas, occasionally glows green or red in discharge tubes',
    atomic_mass: 222,
    boil: 211.5,
    category: 'noble gas',
    density: 9.73,
    discovered_by: 'Friedrich Ernst Dorn',
    melt: 202,
    molar_heat: null,
    named_by: null,
    number: 86,
    period: 6,
    group: 18,
    phase: 'Gas',
    source: 'https://en.wikipedia.org/wiki/Radon',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_086_radon/element_086_radon_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_086_radon/element_086_radon.glb',
    spectral_img: 'https://en.wikipedia.org/wiki/File:Radon_spectrum.png',
    summary:
      'Radon is a chemical element with symbol Rn and atomic number 86. It is a radioactive, colorless, odorless, tasteless noble gas, occurring naturally as a decay product of radium. Its most stable isotope, 222Rn, has a half-life of 3.8 days.',
    symbol: 'Rn',
    xpos: 18,
    ypos: 6,
    wxpos: 32,
    wypos: 6,
    shells: [2, 8, 18, 32, 18, 8],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6',
    electron_configuration_semantic: '[Xe] 4f14 5d10 6s2 6p6',
    electron_affinity: -68,
    electronegativity_pauling: 2.2,
    ionization_energies: [1037],
    'cpk-hex': '428296',
    image: {
      title:
        'This is only an illustration, not radon itself. Radon is said to glow red in discharge tubes, although it practically is never used for this, due to its strong radioactivity.',
      url: 'https://images-of-elements.com/radon.jpg',
      attribution:
        'Chemical ELements A Virtual Museum, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0> source: https://images-of-elements.com/radon.php'
    },
    block: 'p'
  },
  {
    name: 'Francium',
    appearance: null,
    atomic_mass: 223,
    boil: 950,
    category: 'alkali metal',
    density: 1.87,
    discovered_by: 'Marguerite Perey',
    melt: 300,
    molar_heat: null,
    named_by: null,
    number: 87,
    period: 7,
    group: 1,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Francium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_087_francium/element_087_francium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_087_francium/element_087_francium.glb',
    spectral_img: null,
    summary:
      'Francium is a chemical element with symbol Fr and atomic number 87. It used to be known as eka-caesium and actinium K. It is the second-least electronegative element, behind only caesium. Francium is a highly radioactive metal that decays into astatine, radium, and radon.',
    symbol: 'Fr',
    xpos: 1,
    ypos: 7,
    wxpos: 1,
    wypos: 7,
    shells: [2, 8, 18, 32, 18, 8, 1],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1',
    electron_configuration_semantic: '[Rn] 7s1',
    electron_affinity: 46.89,
    electronegativity_pauling: 0.79,
    ionization_energies: [380],
    'cpk-hex': '420066',
    image: {
      title: 'This is only an illustration, not francium itself.',
      url: 'https://images-of-elements.com/francium.jpg',
      attribution:
        'Chemical ELements A Virtual Museum, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0> source: https://images-of-elements.com/francium.jpg'
    },
    block: 's'
  },
  {
    name: 'Radium',
    appearance: 'silvery white metallic',
    atomic_mass: 226,
    boil: 2010,
    category: 'alkaline earth metal',
    density: 5.5,
    discovered_by: 'Pierre Curie',
    melt: 1233,
    molar_heat: null,
    named_by: null,
    number: 88,
    period: 7,
    group: 2,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Radium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_088_radium/element_088_radium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_088_radium/element_088_radium.glb',
    spectral_img: null,
    summary:
      'Radium is a chemical element with symbol Ra and atomic number 88. It is the sixth element in group 2 of the periodic table, also known as the alkaline earth metals. Pure radium is almost colorless, but it readily combines with nitrogen (rather than oxygen) on exposure to air, forming a black surface layer of radium nitride (Ra3N2).',
    symbol: 'Ra',
    xpos: 2,
    ypos: 7,
    wxpos: 2,
    wypos: 7,
    shells: [2, 8, 18, 32, 18, 8, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2',
    electron_configuration_semantic: '[Rn] 7s2',
    electron_affinity: 9.6485,
    electronegativity_pauling: 0.9,
    ionization_energies: [509.3, 979],
    'cpk-hex': '007d00',
    image: {
      title:
        'Radium electroplated on a very small sample of copper foil and covered with polyurethane to prevent reaction with the air',
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Radium226.jpg',
      attribution:
        'grenadier, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons'
    },
    block: 's'
  },
  {
    name: 'Actinium',
    appearance: null,
    atomic_mass: 227,
    boil: 3500,
    category: 'actinide',
    density: 10,
    discovered_by: 'Friedrich Oskar Giesel',
    melt: 1500,
    molar_heat: 27.2,
    named_by: null,
    number: 89,
    period: 7,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Actinium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_089_actinium/element_089_actinium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_089_actinium/element_089_actinium.glb',
    spectral_img: null,
    summary:
      'Actinium is a radioactive chemical element with symbol Ac (not to be confused with the abbreviation for an acetyl group) and atomic number 89, which was discovered in 1899. It was the first non-primordial radioactive element to be isolated. Polonium, radium and radon were observed before actinium, but they were not isolated until 1902.',
    symbol: 'Ac',
    xpos: 3,
    ypos: 10,
    wxpos: 3,
    wypos: 7,
    shells: [2, 8, 18, 32, 18, 9, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1',
    electron_configuration_semantic: '[Rn] 6d1 7s2',
    electron_affinity: 33.77,
    electronegativity_pauling: 1.1,
    ionization_energies: [499, 1170],
    'cpk-hex': '70abfa',
    image: {
      title:
        'Actinium-225 medical radioisotope held in a v-vial at ORNL. The blue glow comes from the ionization of surrounding air by alpha particles',
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Actinium_sample_%2831481701837%29.png',
      attribution:
        'Oak Ridge National Laboratory, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons, source: https://www.flickr.com/photos/oakridgelab/31481701837/'
    },
    block: 'f'
  },
  {
    name: 'Thorium',
    appearance: 'silvery, often with black tarnish',
    atomic_mass: 232.03774,
    boil: 5061,
    category: 'actinide',
    density: 11.724,
    discovered_by: 'Jöns Jakob Berzelius',
    melt: 2023,
    molar_heat: 26.23,
    named_by: null,
    number: 90,
    period: 7,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Thorium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_090_thorium/element_090_thorium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_090_thorium/element_090_thorium.glb',
    spectral_img: null,
    summary:
      'Thorium is a chemical element with symbol Th and atomic number 90. A radioactive actinide metal, thorium is one of only two significantly radioactive elements that still occur naturally in large quantities as a primordial element (the other being uranium). It was discovered in 1828 by the Norwegian Reverend and amateur mineralogist Morten Thrane Esmark and identified by the Swedish chemist Jöns Jakob Berzelius, who named it after Thor, the Norse god of thunder.',
    symbol: 'Th',
    xpos: 4,
    ypos: 10,
    wxpos: 4,
    wypos: 7,
    shells: [2, 8, 18, 32, 18, 10, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d2',
    electron_configuration_semantic: '[Rn] 6d2 7s2',
    electron_affinity: 112.72,
    electronegativity_pauling: 1.3,
    ionization_energies: [587, 1110, 1930, 2780],
    'cpk-hex': '00baff',
    image: {
      title: 'Thorium Metal in Ampoule, corroded',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Thorium-1.jpg',
      attribution:
        'W. Oelen, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons'
    },
    block: 'f'
  },
  {
    name: 'Protactinium',
    appearance: 'bright, silvery metallic luster',
    atomic_mass: 231.035882,
    boil: 4300,
    category: 'actinide',
    density: 15.37,
    discovered_by: 'William Crookes',
    melt: 1841,
    molar_heat: null,
    named_by: 'Otto Hahn',
    number: 91,
    period: 7,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Protactinium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_091_protactinium/element_091_protactinium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_091_protactinium/element_091_protactinium.glb',
    spectral_img: null,
    summary:
      'Protactinium is a chemical element with symbol Pa and atomic number 91. It is a dense, silvery-gray metal which readily reacts with oxygen, water vapor and inorganic acids. It forms various chemical compounds where protactinium is usually present in the oxidation state +5, but can also assume +4 and even +2 or +3 states.',
    symbol: 'Pa',
    xpos: 5,
    ypos: 10,
    wxpos: 5,
    wypos: 7,
    shells: [2, 8, 18, 32, 20, 9, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f2 6d1',
    electron_configuration_semantic: '[Rn] 5f2 6d1 7s2',
    electron_affinity: 53.03,
    electronegativity_pauling: 1.5,
    ionization_energies: [568],
    'cpk-hex': '00a1ff',
    image: {
      title:
        'This sample of Protactinium-233 (dark circular area in the photo) was photographed in the light from its own radioactive emission (the lighter area) at the National Reactor Testing Station in Idaho.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Protactinium-233.jpg',
      attribution: 'ENERGY.GOV, Public domain, via Wikimedia Commons'
    },
    block: 'f'
  },
  {
    name: 'Uranium',
    appearance: null,
    atomic_mass: 238.028913,
    boil: 4404,
    category: 'actinide',
    density: 19.1,
    discovered_by: 'Martin Heinrich Klaproth',
    melt: 1405.3,
    molar_heat: 27.665,
    named_by: null,
    number: 92,
    period: 7,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Uranium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_092_uranium/element_092_uranium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_092_uranium/element_092_uranium.glb',
    spectral_img: null,
    summary:
      'Uranium is a chemical element with symbol U and atomic number 92. It is a silvery-white metal in the actinide series of the periodic table. A uranium atom has 92 protons and 92 electrons, of which 6 are valence electrons.',
    symbol: 'U',
    xpos: 6,
    ypos: 10,
    wxpos: 6,
    wypos: 7,
    shells: [2, 8, 18, 32, 21, 9, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f3 6d1',
    electron_configuration_semantic: '[Rn] 5f3 6d1 7s2',
    electron_affinity: 50.94,
    electronegativity_pauling: 1.38,
    ionization_energies: [597.6, 1420],
    'cpk-hex': '008fff',
    image: {
      title:
        'A biscuit of uranium metal after reduction via the Ames Process. c.1943.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Ames_Process_uranium_biscuit.jpg',
      attribution:
        'Unknown authorUnknown author, Public domain, via Wikimedia Commons'
    },
    block: 'f'
  },
  {
    name: 'Neptunium',
    appearance: 'silvery metallic',
    atomic_mass: 237,
    boil: 4447,
    category: 'actinide',
    density: 20.45,
    discovered_by: 'Edwin McMillan',
    melt: 912,
    molar_heat: 29.46,
    named_by: null,
    number: 93,
    period: 7,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Neptunium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_093_neptunium/element_093_neptunium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_093_neptunium/element_093_neptunium.glb',
    spectral_img: null,
    summary:
      'Neptunium is a chemical element with symbol Np and atomic number 93. A radioactive actinide metal, neptunium is the first transuranic element. Its position in the periodic table just after uranium, named after the planet Uranus, led to it being named after Neptune, the next planet beyond Uranus.',
    symbol: 'Np',
    xpos: 7,
    ypos: 10,
    wxpos: 7,
    wypos: 7,
    shells: [2, 8, 18, 32, 22, 9, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f4 6d1',
    electron_configuration_semantic: '[Rn] 5f4 6d1 7s2',
    electron_affinity: 45.85,
    electronegativity_pauling: 1.36,
    ionization_energies: [604.5],
    'cpk-hex': '0080ff',
    image: {
      title: 'Neptunium 237 sphere (6 kg)',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Neptunium2.jpg',
      attribution:
        'Los Alamos National Laboratory,, Public domain, via Wikimedia Commons'
    },
    block: 'f'
  },
  {
    name: 'Plutonium',
    appearance: 'silvery white, tarnishing to dark gray in air',
    atomic_mass: 244,
    boil: 3505,
    category: 'actinide',
    density: 19.816,
    discovered_by: 'Glenn T. Seaborg',
    melt: 912.5,
    molar_heat: 35.5,
    named_by: null,
    number: 94,
    period: 7,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Plutonium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_094_plutonium/element_094_plutonium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_094_plutonium/element_094_plutonium.glb',
    spectral_img: null,
    summary:
      'Plutonium is a transuranic radioactive chemical element with symbol Pu and atomic number 94. It is an actinide metal of silvery-gray appearance that tarnishes when exposed to air, and forms a dull coating when oxidized. The element normally exhibits six allotropes and four oxidation states.',
    symbol: 'Pu',
    xpos: 8,
    ypos: 10,
    wxpos: 8,
    wypos: 7,
    shells: [2, 8, 18, 32, 24, 8, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f6',
    electron_configuration_semantic: '[Rn] 5f6 7s2',
    electron_affinity: -48.33,
    electronegativity_pauling: 1.28,
    ionization_energies: [584.7],
    'cpk-hex': '006bff',
    image: {
      title: 'Plutonium Ring',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Plutonium_ring.jpg',
      attribution:
        'Los Alamos National Laboratory, Attribution, via Wikimedia Commons'
    },
    block: 'f'
  },
  {
    name: 'Americium',
    appearance: 'silvery white',
    atomic_mass: 243,
    boil: 2880,
    category: 'actinide',
    density: 12,
    discovered_by: 'Glenn T. Seaborg',
    melt: 1449,
    molar_heat: 62.7,
    named_by: null,
    number: 95,
    period: 7,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Americium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_095_americium/element_095_americium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_095_americium/element_095_americium.glb',
    spectral_img:
      'https://en.wikipedia.org/wiki/File:Americium_spectrum_visible.png',
    summary:
      'Americium is a radioactive transuranic chemical element with symbol Am and atomic number 95. This member of the actinide series is located in the periodic table under the lanthanide element europium, and thus by analogy was named after the Americas. Americium was first produced in 1944 by the group of Glenn T.Seaborg from Berkeley, California, at the metallurgical laboratory of University of Chicago.',
    symbol: 'Am',
    xpos: 9,
    ypos: 10,
    wxpos: 9,
    wypos: 7,
    shells: [2, 8, 18, 32, 25, 8, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7',
    electron_configuration_semantic: '[Rn] 5f7 7s2',
    electron_affinity: 9.93,
    electronegativity_pauling: 1.13,
    ionization_energies: [578],
    'cpk-hex': '545cf2',
    image: {
      title: 'A small disc of Am-241 under the microscope.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Americium_microscope.jpg',
      attribution:
        'Bionerd, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons'
    },
    block: 'f'
  },
  {
    name: 'Curium',
    appearance: 'silvery metallic, glows purple in the dark',
    atomic_mass: 247,
    boil: 3383,
    category: 'actinide',
    density: 13.51,
    discovered_by: 'Glenn T. Seaborg',
    melt: 1613,
    molar_heat: null,
    named_by: null,
    number: 96,
    period: 7,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Curium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_096_curium/element_096_curium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_096_curium/element_096_curium.glb',
    spectral_img: null,
    summary:
      'Curium is a transuranic radioactive chemical element with symbol Cm and atomic number 96. This element of the actinide series was named after Marie and Pierre Curie – both were known for their research on radioactivity. Curium was first intentionally produced and identified in July 1944 by the group of Glenn T. Seaborg at the University of California, Berkeley.',
    symbol: 'Cm',
    xpos: 10,
    ypos: 10,
    wxpos: 10,
    wypos: 7,
    shells: [2, 8, 18, 32, 25, 9, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7 6d1',
    electron_configuration_semantic: '[Rn] 5f7 6d1 7s2',
    electron_affinity: 27.17,
    electronegativity_pauling: 1.28,
    ionization_energies: [581],
    'cpk-hex': '785ce3',
    image: {
      title:
        'A piece of curium, which emitts strong radiation that makes it glow',
      url: 'https://images-of-elements.com/s/curium-glow.jpg',
      attribution:
        'European Union, The Actinide Group, Institute for Transuranium Elements (JRC-ITU), source: https://images-of-elements.com/curium.php'
    },
    block: 'f'
  },
  {
    name: 'Berkelium',
    appearance: 'silvery',
    atomic_mass: 247,
    boil: 2900,
    category: 'actinide',
    density: 14.78,
    discovered_by: 'Lawrence Berkeley National Laboratory',
    melt: 1259,
    molar_heat: null,
    named_by: null,
    number: 97,
    period: 7,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Berkelium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_097_berkelium/element_097_berkelium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_097_berkelium/element_097_berkelium.glb',
    spectral_img: null,
    summary:
      'Berkelium is a transuranic radioactive chemical element with symbol Bk and atomic number 97. It is a member of the actinide and transuranium element series. It is named after the city of Berkeley, California, the location of the University of California Radiation Laboratory where it was discovered in December 1949.',
    symbol: 'Bk',
    xpos: 11,
    ypos: 10,
    wxpos: 11,
    wypos: 7,
    shells: [2, 8, 18, 32, 27, 8, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f9',
    electron_configuration_semantic: '[Rn] 5f9 7s2',
    electron_affinity: -165.24,
    electronegativity_pauling: 1.3,
    ionization_energies: [601],
    'cpk-hex': '8a4fe3',
    image: {
      title:
        'It took 250 days to make enough berkelium, shown here (in dissolved state), to synthesize element 117',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Berkelium.jpg',
      attribution:
        'ORNL, Department of Energy, Public domain, via Wikimedia Commons'
    },
    block: 'f'
  },
  {
    name: 'Californium',
    appearance: 'silvery',
    atomic_mass: 251,
    boil: 1743,
    category: 'actinide',
    density: 15.1,
    discovered_by: 'Lawrence Berkeley National Laboratory',
    melt: 1173,
    molar_heat: null,
    named_by: null,
    number: 98,
    period: 7,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Californium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_098_californium/element_098_californium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_098_californium/element_098_californium.glb',
    spectral_img: null,
    summary:
      'Californium is a radioactive metallic chemical element with symbol Cf and atomic number 98. The element was first made in 1950 at the University of California Radiation Laboratory in Berkeley, by bombarding curium with alpha particles (helium-4 ions). It is an actinide element, the sixth transuranium element to be synthesized, and has the second-highest atomic mass of all the elements that have been produced in amounts large enough to see with the unaided eye (after einsteinium).',
    symbol: 'Cf',
    xpos: 12,
    ypos: 10,
    wxpos: 12,
    wypos: 7,
    shells: [2, 8, 18, 32, 28, 8, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f10',
    electron_configuration_semantic: '[Rn] 5f10 7s2',
    electron_affinity: -97.31,
    electronegativity_pauling: 1.3,
    ionization_energies: [608],
    'cpk-hex': 'a136d4',
    image: {
      title:
        'A disc of californium metal (249Cf, 10 mg). The source implies that the disc has a diameter about twice the thickness of a typical pin, or on the order of 1 mm',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Californium.jpg',
      attribution:
        'United States Department of Energy (see File:Einsteinium.jpg), Public domain, via Wikimedia Commons'
    },
    block: 'f'
  },
  {
    name: 'Einsteinium',
    appearance: 'silver-colored',
    atomic_mass: 252,
    boil: 1269,
    category: 'actinide',
    density: 8.84,
    discovered_by: 'Lawrence Berkeley National Laboratory',
    melt: 1133,
    molar_heat: null,
    named_by: null,
    number: 99,
    period: 7,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Einsteinium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_099_einsteinium/element_099_einsteinium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_099_einsteinium/element_099_einsteinium.glb',
    spectral_img: null,
    summary:
      'Einsteinium is a synthetic element with symbol Es and atomic number 99. It is the seventh transuranic element, and an actinide. Einsteinium was discovered as a component of the debris of the first hydrogen bomb explosion in 1952, and named after Albert Einstein.',
    symbol: 'Es',
    xpos: 13,
    ypos: 10,
    wxpos: 13,
    wypos: 7,
    shells: [2, 8, 18, 32, 29, 8, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f11',
    electron_configuration_semantic: '[Rn] 5f11 7s2',
    electron_affinity: -28.6,
    electronegativity_pauling: 1.3,
    ionization_energies: [619],
    'cpk-hex': 'b31fd4',
    image: {
      title:
        '300 micrograms of Einsteinium 253, which has a half-life of 20 days.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Einsteinium.jpg',
      attribution:
        'Haire, R. G., US Department of Energy.Touched up by Materialscientist at en.wikipedia., Public domain, via Wikimedia Commons'
    },
    block: 'f'
  },
  {
    name: 'Fermium',
    appearance: null,
    atomic_mass: 257,
    boil: null,
    category: 'actinide',
    density: null,
    discovered_by: 'Lawrence Berkeley National Laboratory',
    melt: 1800,
    molar_heat: null,
    named_by: null,
    number: 100,
    period: 7,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Fermium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_100_fermium/element_100_fermium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_100_fermium/element_100_fermium.glb',
    spectral_img: null,
    summary:
      'Fermium is a synthetic element with symbol Fm and atomic number 100. It is a member of the actinide series. It is the heaviest element that can be formed by neutron bombardment of lighter elements, and hence the last element that can be prepared in macroscopic quantities, although pure fermium metal has not yet been prepared.',
    symbol: 'Fm',
    xpos: 14,
    ypos: 10,
    wxpos: 14,
    wypos: 7,
    shells: [2, 8, 18, 32, 30, 8, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f12',
    electron_configuration_semantic: '[Rn] 5f12 7s2',
    electron_affinity: 33.96,
    electronegativity_pauling: 1.3,
    ionization_energies: [627],
    'cpk-hex': 'b31fba',
    image: {
      title:
        'Fermium was first observed in the fallout from the Ivy Mike nuclear test.',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Ivy_Mike_-_mushroom_cloud.jpg',
      attribution:
        'U.S. Department of Energy, Public domain, via Wikimedia Commons'
    },
    block: 'f'
  },
  {
    name: 'Mendelevium',
    appearance: null,
    atomic_mass: 258,
    boil: null,
    category: 'actinide',
    density: null,
    discovered_by: 'Lawrence Berkeley National Laboratory',
    melt: 1100,
    molar_heat: null,
    named_by: null,
    number: 101,
    period: 7,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Mendelevium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_101_mendelevium/element_101_mendelevium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_101_mendelevium/element_101_mendelevium.glb',
    spectral_img: null,
    summary:
      'Mendelevium is a synthetic element with chemical symbol Md (formerly Mv) and atomic number 101. A metallic radioactive transuranic element in the actinide series, it is the first element that currently cannot be produced in macroscopic quantities through neutron bombardment of lighter elements. It is the antepenultimate actinide and the ninth transuranic element.',
    symbol: 'Md',
    xpos: 15,
    ypos: 10,
    wxpos: 15,
    wypos: 7,
    shells: [2, 8, 18, 32, 31, 8, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f13',
    electron_configuration_semantic: '[Rn] 5f13 7s2',
    electron_affinity: 93.91,
    electronegativity_pauling: 1.3,
    ionization_energies: [635],
    'cpk-hex': 'b30da6',
    image: {
      title:
        'This is only an illustration, not mendelevium itself. Chemically similar to Thulium, the highly radioactive heavy metal emits very energetic α-radiation.',
      url: 'https://images-of-elements.com/s/mendelevium.jpg',
      attribution:
        'Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/mendelevium.php'
    },
    block: 'f'
  },
  {
    name: 'Nobelium',
    appearance: null,
    atomic_mass: 259,
    boil: null,
    category: 'actinide',
    density: null,
    discovered_by: 'Joint Institute for Nuclear Research',
    melt: 1100,
    molar_heat: null,
    named_by: null,
    number: 102,
    period: 7,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Nobelium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_102_nobelium/element_102_nobelium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_102_nobelium/element_102_nobelium.glb',
    spectral_img: null,
    summary:
      'Nobelium is a synthetic chemical element with symbol No and atomic number 102. It is named in honor of Alfred Nobel, the inventor of dynamite and benefactor of science. A radioactive metal, it is the tenth transuranic element and is the penultimate member of the actinide series.',
    symbol: 'No',
    xpos: 16,
    ypos: 10,
    wxpos: 16,
    wypos: 7,
    shells: [2, 8, 18, 32, 32, 8, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14',
    electron_configuration_semantic: '[Rn] 5f14 7s2',
    electron_affinity: -223.22,
    electronegativity_pauling: 1.3,
    ionization_energies: [642],
    'cpk-hex': 'bd0d87',
    image: {
      title:
        'This is only an illustration, not nobelium itself. Nobelium can only be made in very small amounts and emits strong radiation of various kinds.',
      url: 'https://images-of-elements.com/nobelium.jpg',
      attribution:
        'Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/nobelium.php'
    },
    block: 'f'
  },
  {
    name: 'Lawrencium',
    appearance: null,
    atomic_mass: 266,
    boil: null,
    category: 'actinide',
    density: null,
    discovered_by: 'Lawrence Berkeley National Laboratory',
    melt: 1900,
    molar_heat: null,
    named_by: null,
    number: 103,
    period: 7,
    group: 3,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Lawrencium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_103_lawrencium/element_103_lawrencium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_103_lawrencium/element_103_lawrencium.glb',
    spectral_img: null,
    summary:
      'Lawrencium is a synthetic chemical element with chemical symbol Lr (formerly Lw) and atomic number 103. It is named in honor of Ernest Lawrence, inventor of the cyclotron, a device that was used to discover many artificial radioactive elements. A radioactive metal, lawrencium is the eleventh transuranic element and is also the final member of the actinide series.',
    symbol: 'Lr',
    xpos: 17,
    ypos: 10,
    wxpos: 17,
    wypos: 7,
    shells: [2, 8, 18, 32, 32, 8, 3],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p1',
    electron_configuration_semantic: '[Rn] 5f14 7s2 7p1',
    electron_affinity: -30.04,
    electronegativity_pauling: 1.3,
    ionization_energies: [470],
    'cpk-hex': 'c70066',
    image: {
      title:
        'This is only an illustration, not lawrencium itself. Lawrencium can only be made in very small amounts and emits strong radiation',
      url: 'https://images-of-elements.com/lawrencium.jpg',
      attribution:
        'Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/lawrencium.php'
    },
    block: 'd'
  },
  {
    name: 'Rutherfordium',
    appearance: null,
    atomic_mass: 267,
    boil: 5800,
    category: 'transition metal',
    density: 23.2,
    discovered_by: 'Joint Institute for Nuclear Research',
    melt: 2400,
    molar_heat: null,
    named_by: null,
    number: 104,
    period: 7,
    group: 4,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Rutherfordium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_104_rutherfordium/element_104_rutherfordium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_104_rutherfordium/element_104_rutherfordium.glb',
    spectral_img: null,
    summary:
      'Rutherfordium is a chemical element with symbol Rf and atomic number 104, named in honor of physicist Ernest Rutherford. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 267Rf, has a half-life of approximately 1.3 hours. In the periodic table of the elements, it is a d - block element and the second of the fourth - row transition elements.',
    symbol: 'Rf',
    xpos: 4,
    ypos: 7,
    wxpos: 18,
    wypos: 7,
    shells: [2, 8, 18, 32, 32, 10, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d2',
    electron_configuration_semantic: '[Rn] 5f14 6d2 7s2',
    electron_affinity: null,
    electronegativity_pauling: null,
    ionization_energies: [580],
    'cpk-hex': 'cc0059',
    image: {
      title:
        'Decay traces in a spark chamber, not of rutherfordium, but of a pion. This is a completely different, unrelated particle, but the decay of rutherfordium would make streaks there, too.',
      url: 'https://images-of-elements.com/s/rutherfordium.jpg',
      attribution:
        'Image © CERN, Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/rutherfordium.php'
    },
    block: 'd'
  },
  {
    name: 'Dubnium',
    appearance: null,
    atomic_mass: 268,
    boil: null,
    category: 'transition metal',
    density: 29.3,
    discovered_by: 'Joint Institute for Nuclear Research',
    melt: null,
    molar_heat: null,
    named_by: null,
    number: 105,
    period: 7,
    group: 5,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Dubnium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_105_dubnium/element_105_dubnium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_105_dubnium/element_105_dubnium.glb',
    spectral_img: null,
    summary:
      'Dubnium is a chemical element with symbol Db and atomic number 105. It is named after the town of Dubna in Russia (north of Moscow), where it was first produced. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, dubnium-268, has a half-life of approximately 28 hours.',
    symbol: 'Db',
    xpos: 5,
    ypos: 7,
    wxpos: 19,
    wypos: 7,
    shells: [2, 8, 18, 32, 32, 11, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d3',
    electron_configuration_semantic: '*[Rn] 5f14 6d3 7s2',
    electron_affinity: null,
    electronegativity_pauling: null,
    ionization_energies: [],
    'cpk-hex': 'd1004f',
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/dubnium.php'
    },
    block: 'd'
  },
  {
    name: 'Seaborgium',
    appearance: null,
    atomic_mass: 269,
    boil: null,
    category: 'transition metal',
    density: 35,
    discovered_by: 'Lawrence Berkeley National Laboratory',
    melt: null,
    molar_heat: null,
    named_by: null,
    number: 106,
    period: 7,
    group: 6,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Seaborgium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_106_seaborgium/element_106_seaborgium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_106_seaborgium/element_106_seaborgium.glb',
    spectral_img: null,
    summary:
      'Seaborgium is a synthetic element with symbol Sg and atomic number 106. Its most stable isotope 271Sg has a half-life of 1.9 minutes. A more recently discovered isotope 269Sg has a potentially slightly longer half-life (ca.',
    symbol: 'Sg',
    xpos: 6,
    ypos: 7,
    wxpos: 20,
    wypos: 7,
    shells: [2, 8, 18, 32, 32, 12, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d4',
    electron_configuration_semantic: '*[Rn] 5f14 6d4 7s2',
    electron_affinity: null,
    electronegativity_pauling: null,
    ionization_energies: [],
    'cpk-hex': 'd90045',
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/seaborgium.php'
    },
    block: 'd'
  },
  {
    name: 'Bohrium',
    appearance: null,
    atomic_mass: 270,
    boil: null,
    category: 'transition metal',
    density: 37.1,
    discovered_by: 'Gesellschaft für Schwerionenforschung',
    melt: null,
    molar_heat: null,
    named_by: null,
    number: 107,
    period: 7,
    group: 7,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Bohrium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_107_bohrium/element_107_bohrium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_107_bohrium/element_107_bohrium.glb',
    spectral_img: null,
    summary:
      'Bohrium is a chemical element with symbol Bh and atomic number 107. It is named after Danish physicist Niels Bohr. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 270Bh, has a half-life of approximately 61 seconds.',
    symbol: 'Bh',
    xpos: 7,
    ypos: 7,
    wxpos: 21,
    wypos: 7,
    shells: [2, 8, 18, 32, 32, 13, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d5',
    electron_configuration_semantic: '*[Rn] 5f14 6d5 7s2',
    electron_affinity: null,
    electronegativity_pauling: null,
    ionization_energies: [],
    'cpk-hex': 'e00038',
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/bohrium.php'
    },
    block: 'd'
  },
  {
    name: 'Hassium',
    appearance: null,
    atomic_mass: 269,
    boil: null,
    category: 'transition metal',
    density: 40.7,
    discovered_by: 'Gesellschaft für Schwerionenforschung',
    melt: 126,
    molar_heat: null,
    named_by: null,
    number: 108,
    period: 7,
    group: 8,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Hassium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_108_hassium/element_108_hassium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_108_hassium/element_108_hassium.glb',
    spectral_img: null,
    summary:
      'Hassium is a chemical element with symbol Hs and atomic number 108, named after the German state of Hesse. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 269Hs, has a half-life of approximately 9.7 seconds, although an unconfirmed metastable state, 277mHs, may have a longer half-life of about 130 seconds. More than 100 atoms of hassium have been synthesized to date.',
    symbol: 'Hs',
    xpos: 8,
    ypos: 7,
    wxpos: 22,
    wypos: 7,
    shells: [2, 8, 18, 32, 32, 14, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d6',
    electron_configuration_semantic: '*[Rn] 5f14 6d6 7s2',
    electron_affinity: null,
    electronegativity_pauling: null,
    ionization_energies: [],
    'cpk-hex': 'e6002e',
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/hassium.php'
    },
    block: 'd'
  },
  {
    name: 'Meitnerium',
    appearance: null,
    atomic_mass: 278,
    boil: null,
    category: 'unknown, probably transition metal',
    density: 37.4,
    discovered_by: 'Gesellschaft für Schwerionenforschung',
    melt: null,
    molar_heat: null,
    named_by: null,
    number: 109,
    period: 7,
    group: 9,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Meitnerium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_109_meitnerium/element_109_meitnerium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_109_meitnerium/element_109_meitnerium.glb',
    spectral_img: null,
    summary:
      'Meitnerium is a chemical element with symbol Mt and atomic number 109. It is an extremely radioactive synthetic element (an element not found in nature that can be created in a laboratory). The most stable known isotope, meitnerium-278, has a half-life of 7.6 seconds.',
    symbol: 'Mt',
    xpos: 9,
    ypos: 7,
    wxpos: 23,
    wypos: 7,
    shells: [2, 8, 18, 32, 32, 15, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d7',
    electron_configuration_semantic: '*[Rn] 5f14 6d7 7s2',
    electron_affinity: null,
    electronegativity_pauling: null,
    ionization_energies: [],
    'cpk-hex': 'eb0026',
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/meitnerium.php'
    },
    block: 'd'
  },
  {
    name: 'Darmstadtium',
    appearance: null,
    atomic_mass: 281,
    boil: null,
    category: 'unknown, probably transition metal',
    density: 34.8,
    discovered_by: 'Gesellschaft für Schwerionenforschung',
    melt: null,
    molar_heat: null,
    named_by: null,
    number: 110,
    period: 7,
    group: 10,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Darmstadtium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_110_darmstadtium/element_110_darmstadtium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_110_darmstadtium/element_110_darmstadtium.glb',
    spectral_img: null,
    summary:
      'Darmstadtium is a chemical element with symbol Ds and atomic number 110. It is an extremely radioactive synthetic element. The most stable known isotope, darmstadtium-281, has a half-life of approximately 10 seconds.',
    symbol: 'Ds',
    xpos: 10,
    ypos: 7,
    wxpos: 24,
    wypos: 7,
    shells: [2, 8, 18, 32, 32, 16, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d8',
    electron_configuration_semantic: '*[Rn] 5f14 6d9 7s1',
    electron_affinity: null,
    electronegativity_pauling: null,
    ionization_energies: [],
    'cpk-hex': null,
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/darmstadtium.php'
    },
    block: 'd'
  },
  {
    name: 'Roentgenium',
    appearance: null,
    atomic_mass: 282,
    boil: null,
    category: 'unknown, probably transition metal',
    density: 28.7,
    discovered_by: 'Gesellschaft für Schwerionenforschung',
    melt: null,
    molar_heat: null,
    named_by: null,
    number: 111,
    period: 7,
    group: 11,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Roentgenium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_111_roentgenium/element_111_roentgenium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_111_roentgenium/element_111_roentgenium.glb',
    spectral_img: null,
    summary:
      'Roentgenium is a chemical element with symbol Rg and atomic number 111. It is an extremely radioactive synthetic element (an element that can be created in a laboratory but is not found in nature); the most stable known isotope, roentgenium-282, has a half-life of 2.1 minutes. Roentgenium was first created in 1994 by the GSI Helmholtz Centre for Heavy Ion Research near Darmstadt, Germany.',
    symbol: 'Rg',
    xpos: 11,
    ypos: 7,
    wxpos: 25,
    wypos: 7,
    shells: [2, 8, 18, 32, 32, 17, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d9',
    electron_configuration_semantic: '*[Rn] 5f14 6d10 7s1',
    electron_affinity: 151,
    electronegativity_pauling: null,
    ionization_energies: [],
    'cpk-hex': null,
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/roentgenium.php'
    },
    block: 'd'
  },
  {
    name: 'Copernicium',
    appearance: null,
    atomic_mass: 285,
    boil: 3570,
    category: 'transition metal',
    density: 14.0,
    discovered_by: 'Gesellschaft für Schwerionenforschung',
    melt: null,
    molar_heat: null,
    named_by: null,
    number: 112,
    period: 7,
    group: 12,
    phase: 'Liquid',
    source: 'https://en.wikipedia.org/wiki/Copernicium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_112_copernicium/element_112_copernicium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_112_copernicium/element_112_copernicium.glb',
    spectral_img: null,
    summary:
      'Copernicium is a chemical element with symbol Cn and atomic number 112. It is an extremely radioactive synthetic element that can only be created in a laboratory. The most stable known isotope, copernicium-285, has a half-life of approximately 29 seconds, but it is possible that this copernicium isotope may have a nuclear isomer with a longer half-life, 8.9 min.',
    symbol: 'Cn',
    xpos: 12,
    ypos: 7,
    wxpos: 26,
    wypos: 7,
    shells: [2, 8, 18, 32, 32, 18, 2],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10',
    electron_configuration_semantic: '*[Rn] 5f14 6d10 7s2',
    electron_affinity: null,
    electronegativity_pauling: null,
    ionization_energies: [],
    'cpk-hex': null,
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/copernicium.php'
    },
    block: 'd'
  },
  {
    name: 'Nihonium',
    appearance: null,
    atomic_mass: 286,
    boil: 1430,
    category: 'unknown, probably transition metal',
    density: 16,
    discovered_by: 'RIKEN',
    melt: 700,
    molar_heat: null,
    named_by: null,
    number: 113,
    period: 7,
    group: 13,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Ununtrium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_113_nihonium/element_113_nihonium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_113_nihonium/element_113_nihonium.glb',
    spectral_img: null,
    summary:
      'Nihonium is a chemical element with atomic number 113. It has a symbol Nh. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and is extremely radioactive; its most stable known isotope, nihonium-286, has a half-life of 20 seconds.',
    symbol: 'Nh',
    xpos: 13,
    ypos: 7,
    wxpos: 27,
    wypos: 7,
    shells: [2, 8, 18, 32, 32, 18, 3],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p1',
    electron_configuration_semantic: '*[Rn] 5f14 6d10 7s2 7p1',
    electron_affinity: 66.6,
    electronegativity_pauling: null,
    ionization_energies: [],
    'cpk-hex': null,
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/nihonium.php'
    },
    block: 'p'
  },
  {
    name: 'Flerovium',
    appearance: null,
    atomic_mass: 289,
    boil: 420,
    category: 'post-transition metal',
    density: 14,
    discovered_by: 'Joint Institute for Nuclear Research',
    melt: 340,
    molar_heat: null,
    named_by: null,
    number: 114,
    period: 7,
    group: 14,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Flerovium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_114_flerovium/element_114_flerovium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_114_flerovium/element_114_flerovium.glb',
    spectral_img: null,
    summary:
      'Flerovium is a superheavy artificial chemical element with symbol Fl and atomic number 114. It is an extremely radioactive synthetic element. The element is named after the Flerov Laboratory of Nuclear Reactions of the Joint Institute for Nuclear Research in Dubna, Russia, where the element was discovered in 1998.',
    symbol: 'Fl',
    xpos: 14,
    ypos: 7,
    wxpos: 28,
    wypos: 7,
    shells: [2, 8, 18, 32, 32, 18, 4],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p2',
    electron_configuration_semantic: '*[Rn] 5f14 6d10 7s2 7p2',
    electron_affinity: null,
    electronegativity_pauling: null,
    ionization_energies: [],
    'cpk-hex': null,
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/flerovium.php'
    },
    block: 'p'
  },
  {
    name: 'Moscovium',
    appearance: null,
    atomic_mass: 289,
    boil: 1400,
    category: 'unknown, probably post-transition metal',
    density: 13.5,
    discovered_by: 'Joint Institute for Nuclear Research',
    melt: 670,
    molar_heat: null,
    named_by: null,
    number: 115,
    period: 7,
    group: 15,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Ununpentium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_115_moscovium/element_115_moscovium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_115_moscovium/element_115_moscovium.glb',
    spectral_img: null,
    summary:
      'Moscovium is the name of a synthetic superheavy element in the periodic table that has the symbol Mc and has the atomic number 115. It is an extremely radioactive element; its most stable known isotope, moscovium-289, has a half-life of only 220 milliseconds. It is also known as eka-bismuth or simply element 115.',
    symbol: 'Mc',
    xpos: 15,
    ypos: 7,
    wxpos: 29,
    wypos: 7,
    shells: [2, 8, 18, 32, 32, 18, 5],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p3',
    electron_configuration_semantic: '*[Rn] 5f14 6d10 7s2 7p3',
    electron_affinity: 35.3,
    electronegativity_pauling: null,
    ionization_energies: [],
    'cpk-hex': null,
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/moscovium.php'
    },
    block: 'p'
  },
  {
    name: 'Livermorium',
    appearance: null,
    atomic_mass: 293,
    boil: 1085,
    category: 'unknown, probably post-transition metal',
    density: 12.9,
    discovered_by: 'Joint Institute for Nuclear Research',
    melt: 709,
    molar_heat: null,
    named_by: null,
    number: 116,
    period: 7,
    group: 16,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Livermorium',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_116_livermorium/element_116_livermorium_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_116_livermorium/element_116_livermorium.glb',
    spectral_img: null,
    summary:
      'Livermorium is a synthetic superheavy element with symbol Lv and atomic number 116. It is an extremely radioactive element that has only been created in the laboratory and has not been observed in nature. The element is named after the Lawrence Livermore National Laboratory in the United States, which collaborated with the Joint Institute for Nuclear Research in Dubna, Russia to discover livermorium in 2000.',
    symbol: 'Lv',
    xpos: 16,
    ypos: 7,
    wxpos: 30,
    wypos: 7,
    shells: [2, 8, 18, 32, 32, 18, 6],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p4',
    electron_configuration_semantic: '*[Rn] 5f14 6d10 7s2 7p4',
    electron_affinity: 74.9,
    electronegativity_pauling: null,
    ionization_energies: [],
    'cpk-hex': null,
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/livermorium.php'
    },
    block: 'p'
  },
  {
    name: 'Tennessine',
    appearance: null,
    atomic_mass: 294,
    boil: 883,
    category: 'unknown, probably metalloid',
    density: 7.17,
    discovered_by: 'Joint Institute for Nuclear Research',
    melt: 723,
    molar_heat: null,
    named_by: null,
    number: 117,
    period: 7,
    group: 17,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Tennessine',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_117_tennessine/element_117_tennessine_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_117_tennessine/element_117_tennessine.glb',
    spectral_img: null,
    summary:
      'Tennessine is a superheavy artificial chemical element with an atomic number of 117 and a symbol of Ts. Also known as eka-astatine or element 117, it is the second-heaviest known element and penultimate element of the 7th period of the periodic table. As of 2016, fifteen tennessine atoms have been observed: six when it was first synthesized in 2010, seven in 2012, and two in 2014.',
    symbol: 'Ts',
    xpos: 17,
    ypos: 7,
    wxpos: 31,
    wypos: 7,
    shells: [2, 8, 18, 32, 32, 18, 7],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p5',
    electron_configuration_semantic: '*[Rn] 5f14 6d10 7s2 7p5',
    electron_affinity: 165.9,
    electronegativity_pauling: null,
    ionization_energies: [],
    'cpk-hex': null,
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/tenessine.php'
    },
    block: 'p'
  },
  {
    name: 'Oganesson',
    appearance: null,
    atomic_mass: 294,
    boil: 350,
    category: 'unknown, predicted to be noble gas',
    density: 4.95,
    discovered_by: 'Joint Institute for Nuclear Research',
    melt: null,
    molar_heat: null,
    named_by: null,
    number: 118,
    period: 7,
    group: 18,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Oganesson',
    bohr_model_image:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_118_oganesson/element_118_oganesson_srp_th.png',
    bohr_model_3d:
      'https://storage.googleapis.com/search-ar-edu/periodic-table/element_118_oganesson/element_118_oganesson.glb',
    spectral_img: null,
    summary:
      "Oganesson is IUPAC's name for the transactinide element with the atomic number 118 and element symbol Og. It is also known as eka-radon or element 118, and on the periodic table of the elements it is a p-block element and the last one of the 7th period. Oganesson is currently the only synthetic member of group 18.",
    symbol: 'Og',
    xpos: 18,
    ypos: 7,
    wxpos: 32,
    wypos: 7,
    shells: [2, 8, 18, 32, 32, 18, 8],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6',
    electron_configuration_semantic: '*[Rn] 5f14 6d10 7s2 7p6',
    electron_affinity: 5.40318,
    electronegativity_pauling: null,
    ionization_energies: [],
    'cpk-hex': null,
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com/oganesson.php'
    },
    block: 'p'
  },
  {
    name: 'Ununennium',
    appearance: null,
    atomic_mass: 315,
    boil: 630,
    category: 'unknown, but predicted to be an alkali metal',
    density: 3,
    discovered_by: 'GSI Helmholtz Centre for Heavy Ion Research',
    melt: null,
    molar_heat: null,
    named_by: null,
    number: 119,
    period: 8,
    group: 1,
    phase: 'Solid',
    source: 'https://en.wikipedia.org/wiki/Ununennium',
    bohr_model_image: null,
    bohr_model_3d: null,
    spectral_img: null,
    summary:
      'Ununennium, also known as eka-francium or simply element 119, is the hypothetical chemical element with symbol Uue and atomic number 119. Ununennium and Uue are the temporary systematic IUPAC name and symbol respectively, until a permanent name is decided upon. In the periodic table of the elements, it is expected to be an s-block element, an alkali metal, and the first element in the eighth period.',
    symbol: 'Uue',
    xpos: 1,
    ypos: 8,
    wxpos: 1,
    wypos: 8,
    shells: [2, 8, 18, 32, 32, 18, 8, 1],
    electron_configuration:
      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6 8s1',
    electron_configuration_semantic: '*[Uuo] 8s1',
    electron_affinity: 63.87,
    electronegativity_pauling: null,
    ionization_energies: [],
    'cpk-hex': null,
    image: {
      title: 'No Image Found',
      url: 'https://images-of-elements.com/s/transactinoid.png',
      attribution:
        'Chemical Elements A Virtual Museum under a Creative Commons Attribution 3.0 Unported License, source: https://images-of-elements.com'
    },
    block: 's'
  }
]
