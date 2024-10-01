import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next"; 
import { Stack } from "@mui/material";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";


const Agents:NextPage = () =>{
    const device = useDeviceDetect();
    if(device === "mobile"){
        return <Stack>AGENTS LIST Mobile</Stack>;
      }else{
        return (
            <div>
                <Stack className={"container"}>
                    AGENTS LIST 
                </Stack>
            </div>
        );
    }
}
    


export default withLayoutBasic(Agents);