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
import { TableCellAction } from "@/components/atoms/tables/table-cell-action";
import { PaginationUI } from "@/components/atoms/tables/pagination-ui";
import { PaginationPageSelector } from "@/components/atoms/tables/pagination-page-selector";
import { getVisitorsAction } from "@/lib/supabase/services/visitors/actions/getVisitorsAction";
import mockData from "@/data/fake-transactions-page-1.json";
import { VisitorHelper } from "@/lib/supabase/services/visitors/helper";

export const metadata: Metadata = {
  title: "Manage Visitors",
};

const visitor = new VisitorHelper();

export default async function VisitorsPage() {
  const { data, error } = await getVisitorsAction({
    sortBy: "updated_at",
  });

  return (
    <main className="_flex-col-cc grid min-h-[75vh] gap-4">
      <h1>VisitorsPage</h1>
      {/* <Debugger data={{ count: visitorData?.length, visitorData }} /> */}
      {/* <div className="grid gap-2.5"> */}
      <TableUI.Container>
        <TableUI.HeaderRow hasAction>
          <TableHead>Last Seen</TableHead>
          <TableHead>IP Address</TableHead>
          <TableHead className="text-right">Visits</TableHead>
          <TableHead>Device</TableHead>
          <TableHead>Platform</TableHead>
          <TableHead>Geolocation</TableHead>
        </TableUI.HeaderRow>
        <TableBody>
          {data
            ? data.map((item, i) => {
                visitor.setVisitor(item);
                //
                return (
                  <TableRow key={item.id}>
                    <TableCell>{visitor.updatedAt}</TableCell>
                    <TableUI.CellAvatarBio
                      name={item.ip_address}
                      email={item.pathname}
                    />
                    <TableCell className="text-right">{item.visits}</TableCell>
                    <TableUI.CellBadge>{item.screen?.device}</TableUI.CellBadge>
                    <TableCell>{item.platform}</TableCell>
                    <TableCellAction
                      menu={[
                        // { label: "Receipt", value: "Receipt", disabled: true },
                        // { label: "Edit", value: "Edit" },
                        { label: "Delete", value: "Delete" },
                        // {
                        //   label: "Duplicate",
                        //   value: "Duplicate",
                        //   separator: true,
                        // },
                      ]}
                    />
                  </TableRow>
                );
              })
            : null}
        </TableBody>
      </TableUI.Container>
      <PaginationUI.Container>
        <PaginationUI.SizeSelector />
        <PaginationUI.SelectedRowsCaption />
        <PaginationPageSelector />
      </PaginationUI.Container>
      {/* </div> */}
    </main>
  );
}
