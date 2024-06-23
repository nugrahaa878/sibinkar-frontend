import axiosClient from "@/networks/apiClient";

interface Props {
  organizationName: string;
  personnelId: string;
}

const usePostCreateOrganization = async ({
  organizationName,
  personnelId,
}: Props) => {
  const data = {
    nama_chart: organizationName,
    personnel_id: personnelId,
  };

  const response = await axiosClient.post("/organizational-structure/chart/", data);
  return response.data.success || true;
};

export default usePostCreateOrganization;
