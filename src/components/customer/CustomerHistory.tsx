import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { get, History } from "../../utils";
import Delivery from "./Delivery";

function CustomerHistory() {
  const [histories, setHistories] = useState<History[]>(null!);

  useEffect(() => {
    (async () => {
      const n = toast.loading("Getting completed deliveries");
      try {
        const res = await get("users/delivery/history");
        console.log(res.data);
        setHistories(res.data.histories);
        toast.success("Got completed deliveries!", {
          id: n,
        });
      } catch (err: any) {
        console.log(err);
        toast.error(`Error: ${err.msg}`, {
          id: n,
        });
      }
    })();
  }, []);

  return (
    <div className="mt-5 max-w-5xl mx-auto px-3">
      <h1 className="text-2xl font-semibold text-center my-4">
        Your completed deliveries
      </h1>
      <p className="text-lg text-center my-6">
        You have made {histories?.length} deliveries
      </p>
      <div>
        {histories?.length > 0 ? (
          histories?.map((history) => <Delivery history={history} />)
        ) : (
          <h1>You have not made any deliveries yet</h1>
        )}
      </div>
    </div>
  );
}

export default CustomerHistory;
