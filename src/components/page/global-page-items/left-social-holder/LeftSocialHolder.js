import IconGenerator from "../../../global-items/IconGenerator";


function LeftSocialHolder() {

    return (

        <div id="globalLeftSocialHolder" className="d-flex flex-column position-fixed ms-1 justify-content-center">
            <div className="d-flex flex-column">
                <IconGenerator icon="facebook" />
                <IconGenerator icon="twitter" />
                <IconGenerator icon="instagram" />
            </div>
            <span>Follow Me</span>
        </div>
    );

}

export default LeftSocialHolder;