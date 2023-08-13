interface CommonProps {
    setSelectCard?: React.Dispatch<React.SetStateAction<string[]>>;
    selectCard?: string[];
    setSelectCardError?: React.Dispatch<React.SetStateAction<string>>;
    setServicePopUP?: React.Dispatch<React.SetStateAction<boolean>>;
    setServiceCardData?: React.Dispatch<React.SetStateAction<string[]>>;
  }
  
  interface ServiceCardProps extends CommonProps {
    slider: React.MutableRefObject<SliderCrouserl | null>;
    slidesToShowCustom: number;
  }
  
  type ServicePropsType = CommonProps & {
    icon: string;
    shortText: string;
    slug:string
  };
   