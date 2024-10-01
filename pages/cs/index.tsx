import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next"; 
import { Stack } from "@mui/material";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";


const CS:NextPage = () =>{
    const device = useDeviceDetect();
    if(device === "mobile"){
      return <Stack>CS Mobile</Stack>;
    }else{
        return (
            <div>
                <Stack className={"container"}>
                    CS 
                </Stack>
            </div>
        );
    }
}
    


export default withLayoutBasic(CS);