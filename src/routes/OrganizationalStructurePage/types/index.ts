export interface OrgNode {
  name: string;
  title: string;
  id: number;
  offset?: number;
  children?: OrgNode[];
  childOffset?: OrgNode[];
}
