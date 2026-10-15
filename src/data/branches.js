// Centralized Branches Configuration mapped directly from sm_branch & ten_tenant
// All Hyderabad branches belong to tenant_id: 1 (My School ITALY | HYDERABAD)

export const BRANCHES = [
  // --- Hyderabad Branches (tenant_id: 1) ---
  {
    id: 3,
    name: 'Avance 1',
    displayName: 'Avance 1',
    branchCode: 'BR-01',
    tenantId: 1,
    district: 'Hyderabad',
    state: 'Telangana',
    isHyderabad: true,
    aliases: ['avance-1', 'avance 1', 'avance'],
  },
  {
    id: 4,
    name: 'Avance 2',
    displayName: 'Avance 2',
    branchCode: 'BR-02',
    tenantId: 1,
    district: 'Hyderabad',
    state: 'Telangana',
    isHyderabad: true,
    aliases: ['avance-2', 'avance 2'],
  },
  {
    id: 5,
    name: 'Commissioner Office',
    displayName: 'Commissioner Office (Cyberabad)',
    branchCode: 'BR-03',
    tenantId: 1,
    district: 'Hyderabad',
    state: 'Telangana',
    isHyderabad: true,
    aliases: ['commissioner office', 'cyberabad', 'commissioner'],
  },
  {
    id: 6,
    name: 'Hitex',
    displayName: 'Hitex',
    branchCode: 'BR-04',
    tenantId: 1,
    district: 'Hyderabad',
    state: 'Telangana',
    isHyderabad: true,
    aliases: ['hitex'],
  },
  {
    id: 12,
    name: 'Kondapur',
    displayName: 'Kondapur',
    branchCode: 'BR-10',
    tenantId: 1,
    district: 'Hyderabad',
    state: 'Telangana',
    isHyderabad: true,
    aliases: ['kondapur'],
  },
  {
    id: 7,
    name: 'Kukatpally',
    displayName: 'Kukatpally',
    branchCode: 'BR-05',
    tenantId: 1,
    district: 'Hyderabad',
    state: 'Telangana',
    isHyderabad: true,
    aliases: ['kukatpally'],
  },
  {
    id: 8,
    name: 'Mani Konda',
    displayName: 'Mani Konda',
    branchCode: 'BR-06',
    tenantId: 1,
    district: 'Hyderabad',
    state: 'Telangana',
    isHyderabad: true,
    aliases: ['manikonda', 'mani konda'],
  },
  {
    id: 9,
    name: 'Mindspace',
    displayName: 'Mindspace',
    branchCode: 'BR-07',
    tenantId: 1,
    district: 'Hyderabad',
    state: 'Telangana',
    isHyderabad: true,
    aliases: ['mindspace'],
  },
  {
    id: 10,
    name: 'Miyapur',
    displayName: 'Miyapur',
    branchCode: 'BR-08',
    tenantId: 1,
    district: 'Hyderabad',
    state: 'Telangana',
    isHyderabad: true,
    aliases: ['miyapur'],
  },
  {
    id: 11,
    name: 'Q-city',
    displayName: 'Q-city (The Square)',
    branchCode: 'BR-09',
    tenantId: 1,
    district: 'Hyderabad',
    state: 'Telangana',
    isHyderabad: true,
    aliases: ['q-city', 'qcity', 'the square', 'square'],
  },

  // --- Other Branches ---
  {
    id: 2,
    name: 'My School ITALYpune',
    displayName: 'Pune (Balewadi / Purna Nagar)',
    branchCode: 'ITALYPUNE',
    tenantId: 7,
    district: 'Pune',
    state: 'Maharashtra',
    isHyderabad: false,
    aliases: ['balewadi', 'pune', 'purna nagar', 'purna-nagar', 'italypune'],
  },
  {
    id: 13,
    name: 'Bhimavaram',
    displayName: 'Bhimavaram',
    branchCode: 'BVRM01',
    tenantId: 8,
    district: 'West Godavari',
    state: 'Andhra Pradesh',
    isHyderabad: false,
    aliases: ['bhimavaram'],
  },
  {
    id: 15,
    name: 'Nashik',
    displayName: 'Nashik',
    branchCode: 'NS01',
    tenantId: 9,
    district: 'Nashik',
    state: 'Maharashtra',
    isHyderabad: false,
    aliases: ['nashik', 'thangaon'],
  },
  {
    id: 16,
    name: 'Tadepalligudem',
    displayName: 'Tadepalligudem',
    branchCode: 'T-001',
    tenantId: 10,
    district: 'West Godavari',
    state: 'Andhra Pradesh',
    isHyderabad: false,
    aliases: ['tadepalligudem'],
  },
];

export const HYDERABAD_BRANCHES = BRANCHES.filter((b) => b.isHyderabad);
export const OTHER_BRANCHES = BRANCHES.filter((b) => !b.isHyderabad);

export const DEFAULT_TENANT_ID = 1;

export function getBranchById(id) {
  if (id === null || id === undefined || id === '') return null;
  const numId = Number(id);
  return BRANCHES.find((b) => b.id === numId) || null;
}

export function findBranchByKeyword(text) {
  if (!text || typeof text !== 'string') return null;
  const clean = text.toLowerCase().trim();

  // Ignore generic titles / non-branch terms
  if (
    clean === 'enrol your child' ||
    clean === 'book your tour' ||
    clean.includes('any hyderabad') ||
    clean.includes('corporate')
  ) {
    return null;
  }

  // Exact match by name or displayName
  const exact = BRANCHES.find(
    (b) => b.name.toLowerCase() === clean || b.displayName.toLowerCase() === clean
  );
  if (exact) return exact;

  // Prioritize specific matches over prefixes
  if (clean.includes('avance 2') || clean.includes('avance-2')) {
    return BRANCHES.find((b) => b.id === 4) || null;
  }
  if (clean.includes('avance 1') || clean.includes('avance-1') || clean.includes('avance')) {
    return BRANCHES.find((b) => b.id === 3) || null;
  }

  // Keyword / alias search
  return (
    BRANCHES.find((b) => {
      if (clean.includes(b.name.toLowerCase())) return true;
      if (clean.includes(b.displayName.toLowerCase())) return true;
      return b.aliases?.some((alias) => clean.includes(alias.toLowerCase()));
    }) || null
  );
}

export function findRespectiveBranch({
  pathname = '',
  search = '',
  title = '',
  defaultBranch = '',
  defaultBranchId = null,
} = {}) {
  // 1. Explicit ID
  if (defaultBranchId) {
    const b = getBranchById(defaultBranchId);
    if (b) return b;
  }

  // 2. Explicit Branch name/keyword
  if (defaultBranch) {
    const b = findBranchByKeyword(defaultBranch) || getBranchById(defaultBranch);
    if (b) return b;
  }

  // 3. Search query string (e.g. ?location=balewadi or ?branch=hitex)
  if (search) {
    const params = new URLSearchParams(search);
    const queryLoc = params.get('location') || params.get('branch');
    if (queryLoc) {
      const b = findBranchByKeyword(queryLoc);
      if (b) return b;
    }
  }

  // 4. Pathname route (e.g. /hitex, /avance, /tadepalligudem, /purna-nagar)
  if (pathname) {
    const cleanPath = pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
    if (
      cleanPath &&
      cleanPath !== 'hyderabad' &&
      cleanPath !== 'contact' &&
      cleanPath !== 'contact-us' &&
      cleanPath !== 'admissions' &&
      cleanPath !== 'programs' &&
      cleanPath !== 'whyus' &&
      cleanPath !== 'about'
    ) {
      const b = findBranchByKeyword(cleanPath);
      if (b) return b;
    }
  }

  // 5. Title (e.g. "BOOK A TOUR AT MSI HITEX")
  if (title) {
    const b = findBranchByKeyword(title);
    if (b) return b;
  }

  return null;
}
