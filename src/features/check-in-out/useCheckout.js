import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClinet = useQueryClient();

  const { mutate: checkOut, isLoading } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked-out`);
      queryClinet.invalidateQueries({
        active: true,
      });
    },

    onError: (data) => {
      toast.error(`Booking #${data.id} not successfully checked-out`);
    },
  });

  return { checkOut, isLoading };
}
