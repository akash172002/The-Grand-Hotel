import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckIn() {
  const queryClinet = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkIn, isLoading } = useMutation({
    mutationFn: ({ bookingId, breakFast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakFast,
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked-in`);
      queryClinet.invalidateQueries({
        active: true,
      });
      navigate("/");
    },

    onError: (data) => {
      toast.error(`Booking #${data.id} not successfully checked-in`);
    },
  });

  return { checkIn, isLoading };
}
