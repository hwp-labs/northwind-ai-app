import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <main className="min-h-[75vh]">
      <h1>DashboardPage</h1>
      <p></p>
    </main>
  );
}

/*
# kpis
- contacts total/today 
- visitors total/today  (createdAt|updatedAt today)
- visits total/today 
- contact conversion rate x monthly active visitors
  -- fdate = first visitor createdAt
  -- x = last visitor createdAt
  -- y = last visitor updatedAt (orderBy updatedAt desc limit 1)
  -- ldate = max(x, y) = last visitor date
  -- days = diff(fdate, ldate) = total days visited
  -- visitors = total visitors
  -- dav = visitors / days = avgVisitorsPerDay
  -- mav = dav * 30
- 


# charts
- contacts line graph @filter
- visitors line graph @filter
- top contact industry (progress chart, more)
- top visitor screen.device (pie)

@charts.filter
- *weekly w1 - w4.4 [feb 2026]
- monthly jan - dec [2026]
- quarterly q1 - q4 [2026]
- annually 2022 - 2026 
  -- fiveYearsAgo = currentYear - 5
  -- startYear = fiveYearsAgo <= launchYear ? launchYear : fiveYearsAgo

# tables
- top contacts (more) @sort(name, bname, industry, createdAt) @filter(industry[])
- top visitors (more) @sort(createdAt, updatedAt) @filter(screen.device)
*/
