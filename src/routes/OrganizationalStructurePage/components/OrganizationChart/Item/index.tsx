import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { OrgNode } from "@/routes/OrganizationalStructurePage/types";
import NodeMenuDialog from "../../Dialog/NodeMenuDialog";

interface Props {
  chartId: string;
  item: OrgNode;
}

const Item = ({ chartId, item }: Props) => {
  if (item.offset) {
    return (
      <div>
        <Dialog>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{ height: "70px", width: "1px", backgroundColor: "black" }}
            />
            <div
              style={{
                height: "1px",
                width: "100px",
                backgroundColor: "black",
              }}
            />
            <DialogTrigger style={{ marginRight: "-300px" }}>
              <div
                style={{
                  width: "200px",
                  height: "70px",
                  padding: "0.75rem",
                  backgroundColor: "#64748b",
                  borderRadius: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                  }}
                  className="line-clamp-2"
                >
                  {item.personnel.jabatan}
                </div>
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: "0.75rem",
                    fontWeight: "400",
                  }}
                >
                  {item.personnel.nama}
                </div>
              </div>
            </DialogTrigger>
          </div>
          <NodeMenuDialog
            chartId={chartId}
            item={item}
            parentOffsetId={item.id}
          />
        </Dialog>

        {item.child_offsets.map((child) => {
          return (
            <Dialog key={child.id}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    height: "90px",
                    width: "1px",
                    backgroundColor: "black",
                  }}
                />
                <DialogTrigger>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginRight: "-300px",
                      marginLeft: "100px",
                    }}
                  >
                    <div
                      style={{
                        height: "20px",
                        width: "1px",
                        backgroundColor: "#64748b",
                      }}
                    />
                    <div
                      style={{
                        width: "200px",
                        height: "70px",
                        padding: "0.75rem",
                        backgroundColor: "#64748b",
                        borderRadius: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontSize: "0.875rem",
                          fontWeight: "600",
                        }}
                        className="line-clamp-2"
                      >
                        {child.personnel.jabatan}
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontSize: "0.75rem",
                          fontWeight: "400",
                        }}
                      >
                        {child.personnel.nama}
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
              </div>
              <NodeMenuDialog
                chartId={chartId}
                item={child}
                parentOffsetId={item.id}
              />
            </Dialog>
          );
        })}
      </div>
    );
  }
  return (
    <Dialog>
      <DialogTrigger>
        <div
          style={{
            width: "300px",
            height: "70px",
            backgroundColor: "#64748b",
            borderRadius: "0.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "0.875rem",
              fontWeight: "600",
            }}
            className="line-clamp-2"
          >
            {item.personnel.jabatan}
          </div>
          <div
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "0.75rem",
              fontWeight: "400",
            }}
          >
            {item.personnel.nama}
          </div>
        </div>
      </DialogTrigger>
      <NodeMenuDialog chartId={chartId} item={item} />
    </Dialog>
  );
};

export default Item;
