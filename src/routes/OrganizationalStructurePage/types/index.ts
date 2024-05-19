export interface OrgNode {
  nama: string;
  jabatan: string;
  id: number;
  offset: boolean;
  child: OrgNode[];
  child_offsets: OrgNode[];
}

export interface Organization {
  id: number;
  nama: string;
}