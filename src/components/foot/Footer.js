import IconGenerator from "../global-items/IconGenerator";
function Footer() {
    return (

        <div id="footerHolder" className="container-fluid position-fixed bottom-0 w-100">

            <div className="container">
                <div className="row p-0 m-0">
                    <div className="col-12 col-lg-8">
                        <span>      SOLDAKİ YAZILAR</span>

                    </div>
                    <div className="col-12 col-lg-4 d-flex justify-content-end align-items-center">
                        <div className="d-flex justify-content-end ">
                            <IconGenerator icon="facebook" />
                            <IconGenerator icon="twitter" />
                            <IconGenerator icon="linkedin" />
                            <IconGenerator icon="instagram" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Footer;