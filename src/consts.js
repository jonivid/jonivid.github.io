export const MAX_ITEMS_PER_PAGE = 20;

export const HEADERS = [
  { title: "Id", column: "id" },
  { title: "Status", column: "status" },
  { title: "Company Name", column: "companyName" },
  { title: "Vendor Name", column: "vendorName" },
  { title: "Vendor Address", column: "vendorAddress" },
  { title: "Amount", column: "amount" }
];
export const STATUSES = [
  { value: "unpaid", label: "Unpaid" },
  { value: "scheduled", label: "Scheduled" },
  { value: "in-progress", label: "In Progress" },
  { value: "paid", label: "Paid" },
  { value: "failed", label: "Failed" }
];
