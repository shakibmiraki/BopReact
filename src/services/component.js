const fetchList1 = () => {
  return [{ amount: 10000 }, { amount: 20000 }, { amount: 25000 }, { amount: 30000 }, { amount: 40000 }];
};

const fetchList2 = () => {
  return [
    { id: 1, text: "آیتم 1" },
    { id: 2, text: "آیتم 2" },
  ];
};

export const componentService = {
  fetchList1,
  fetchList2,
};
