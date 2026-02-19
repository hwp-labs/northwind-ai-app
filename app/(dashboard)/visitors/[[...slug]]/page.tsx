import { Metadata } from "next";
//
import { Debugger } from "@/components/debugger";
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/shadcn/ui/table";
import { TableUI } from "@/components/atoms/tables/table-ui";
import { PaginationUI } from "@/components/atoms/tables/pagination-ui";
import { PaginationPageSelector } from "@/components/atoms/tables/pagination-page-selector";
import { VisitorsTableAction } from "@/features/visitors/components/visitors-table-action";
import { VisitorHelper } from "@/lib/supabase/services/visitors/helper";
import { getVisitorsAction } from "@/lib/supabase/services/visitors/actions/getVisitorsAction";

export const metadata: Metadata = {
  title: "Manage Visitors",
};

const visitor = new VisitorHelper();

export default async function VisitorsPage() {
  const { data, error } = await getVisitorsAction({
    sortBy: "updated_at",
  });

  return (
    <main className="grid gap-4">
      <TableUI.Container>
        <TableUI.HeaderRow hasAction>
          <TableHead>IP Address</TableHead>
          <TableHead className="text-right">Visits</TableHead>
          <TableHead>Device</TableHead>
          <TableHead>Platform</TableHead>
          <TableHead>Geolocation</TableHead>
          <TableHead>Last Seen</TableHead>
        </TableUI.HeaderRow>
        <TableBody>
          {data
            ? data.map((item, i) => {
                visitor.setVisitor(item);
                //
                return (
                  <TableRow key={item.id}>
                    <TableUI.CellAvatarBio
                      name={item.ip_address}
                      email={item.pathname}
                      showBadge={visitor.IsUpdatedToday()}
                    />
                    <TableCell className="text-right">{item.visits}</TableCell>
                    <TableUI.CellBadge>{visitor.device}</TableUI.CellBadge>
                    <TableCell>{item.platform}</TableCell>
                    <TableUI.CellAvatarBio
                      name={visitor.location}
                      email={visitor.geolocation}
                      textOnly
                    />
                    <TableCell>{visitor.updatedAt}</TableCell>
                    <VisitorsTableAction id={item.id}/>
                  </TableRow>
                );
              })
            : null}
        </TableBody>
      </TableUI.Container>
      {/* <PaginationUI.Container>
        <PaginationUI.SizeSelector />
        <PaginationUI.SelectedRowsCaption />
        <PaginationPageSelector />
      </PaginationUI.Container> */}
    </main>
  );
}
