import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosCommon from "./useAxiosCommon";


const useNotification = () => {
  const axiosCommon = useAxiosCommon();
  const { currentUser } = useAuth();
  const {
    data: notifications,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["notifications", currentUser],
    queryFn: async () => {
      const { data } = await axiosCommon.get(
        `/api/notifications/${currentUser?.phone}`
      );
      return data;
    },
  });
  return {notifications, refetch, isLoading}
};

export default useNotification;