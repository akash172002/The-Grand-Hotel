import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constant";

export default function useBooking() {
  const queryClinet = useQueryClient();

  const [searchParams, setSearchParams] = useSearchParams();

  // filter
  const filterValue = searchParams.get("status");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { feild: "status", value: filterValue };

  // Sort

  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";

  const [feild, direction] = sortByRaw.split("-");

  const sortBy = { feild, direction };

  //Pagination

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: { data: bookings, count } = {}, isLoading } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  //PRE_FETCHNG
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClinet.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClinet.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, bookings, count };
}
