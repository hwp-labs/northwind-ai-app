import {
  FaUserSecret,
  FaUserTag,
  FaStar,
  FaBusinessTime,
} from "react-icons/fa6";
import { getStatisticsAction } from "@/lib/supabase/services/analytics/actions/getStatisticsAction";

export const StatisticsWidget = async () => {
  const { data } = await getStatisticsAction();
  const transformedData = [
    {
      key: "visitors",
      label: "Unique Visitors",
      value: data?.totalVisitors || 0,
    },
    {
      key: "users",
      label: "Daily Active Users",
      value: data?.averageVisitorsPerDay || 0,
    },
    {
      key: "contacts",
      label: "Demo Requests",
      value: data?.totalContacts || 0,
    },
    { key: "projects", label: "GitHub Stars", value: 1 },
  ];
  //
  return (
    <section className="pt-16 sm:pt-0">
      <div className="from-contrast flex-row-cc bg-gradient-to-l to-purple-800 py-12 lg:py-8">
        <ul className="grid gap-16 text-white sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {transformedData.map((item) => (
            <li
              key={item.key}
              className="debug_ flex-row-cs max-w-[220px] min-w-[220px] gap-4"
            >
              <i className="flex-row-cc size-14 rounded-full bg-white/10">
                {
                  {
                    visitors: <FaUserSecret size={24} />,
                    users: <FaUserTag size={24} />,
                    contacts: <FaBusinessTime size={24} />,
                    projects: <FaStar size={24} />,
                  }[item.key]
                }
              </i>
              <div className="grid gap-1">
                <h3 className="font-[Raleway] text-2xl font-bold">
                  {item.value}
                </h3>
                <p className="text-sm font-medium uppercase opacity-90">
                  {item.label}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
