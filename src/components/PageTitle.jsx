import { Helmet } from "react-helmet"



function PageTitle({page}){
    return(
        <Helmet>
            <title> {page} -Section</title>
        </Helmet>
    )
}

export default PageTitle;