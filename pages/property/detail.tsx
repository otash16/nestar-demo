import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";

const PropertyDetail = () =>{
    const device = useDeviceDetect();
    if(device === "mobile"){
      return <Stack>PropertyDetail Mobile</Stack>;
    }else{
        return (
            <div>PropertyDetail</div>
        //     <Container>PROPERTY DETAIL</Container>
        );
    }
};

export default withLayoutBasic(PropertyDetail); // export default PropertyDetail; // export default withLayoutBasic(PropertyDetail); // export