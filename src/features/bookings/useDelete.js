import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDelete() {
  const queryClient = useQueryClient();

  const { mutate: removeBooking, isLoading } = useMutation({
    mutationFn: deleteBooking,

    onSuccess: () => {
      toast.success(`booking is successfully deleted`);
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },

    onError: () => {
      toast.error(`Booking  not successfully deleted`);
    },
  });

  return { removeBooking, isLoading };
}
