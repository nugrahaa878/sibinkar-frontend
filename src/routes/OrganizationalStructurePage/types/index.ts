export interface OrgNode {
  name: string;
  title: string;
  id: number;
  children?: OrgNode[];
}
