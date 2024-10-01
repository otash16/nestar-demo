import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next"; 
import { Stack } from "@mui/material";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";


const Comunity:NextPage = () =>{
    const device = useDeviceDetect();
    if(device === "mobile"){
      return <Stack>COMUNITY Mobile</Stack>;
    }else{
        return (
            <div>
                <Stack className={"container"}>
                    COMUNITY 
                </Stack>
            </div>
        );
    }
}
    


export default withLayoutBasic(Comunity);