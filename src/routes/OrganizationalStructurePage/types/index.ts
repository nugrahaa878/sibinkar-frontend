export interface OrgNode {
  personnel: NodePersonnel;
  id: number;
  offset: boolean;
  child: OrgNode[];
  child_offsets: OrgNode[];
}

export interface Organization {
  id: number;
  nama: string;
  nodes?: OrgNode;
}

export interface NodePersonnel {
  id: string;
  nama: string;
  jabatan: string;
}