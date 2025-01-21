import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkOut, isLoading } = useCheckout();

  return (
    <Button
      variations="primary"
      sizes="small"
      onClick={() => checkOut(bookingId)}
      disabled={isLoading}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
