interface FilterType  {
    distance:string,
    pin_code:string
  }
  type orderTimeType = "Sort by New order" | "Sort by Older order" | "Sort by newest or older";
  type OrderTimeProps = {
    orderTime: orderTimeType
    setOrderTime:React.Dispatch<React.SetStateAction<orderTimeType>>
  }
  type  NewListedOrderPropsType =  OrderTimeProps &({
    selectCard:string[];
    filter:FilterType
    setSelectCard: React.Dispatch<React.SetStateAction<string[]>>,
    setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
  })
  interface FilterPropsType extends OrderTimeProps{
    setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
    filter: FilterType;
  }