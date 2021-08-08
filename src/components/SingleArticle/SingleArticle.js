import './SingleArticle.scss'
import {EditAlt} from '@styled-icons/boxicons-regular/EditAlt'
import {Delete} from '@styled-icons/fluentui-system-regular/Delete'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const EditIcon = styled(EditAlt)` 
`
const DeleteIcon = styled(Delete)` 
`

const AuthorName = "Rupert von Write"
const dateAndTime = "1 hour ago 10th of june"

const SingleArticle = () => {
    return ( 
        <div className="singleArticle">
            <div className="Wrapper" >
            <img
            className="singleArticleImage"
            src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=995&q=80"
            alt=""
            />
                <div className="singleArticleTitleBox">
                    <h1 className="singleArticleTitle">Helth is wealth</h1>
                        <div>
                            <EditIcon className="icon editBtn"/>
                            <DeleteIcon className="icon deleteBtn"/>
                        </div>
                </div>
                <div className="singleArticleInfo">
                    <span className="author">
                        <Link className="link" to="/articles?username=Rob">
                            Author: <b>{AuthorName}</b>
                        </Link>
                    </span>
                    <span className="singleArticleDate">
                        posted: <b>{dateAndTime}</b>
                    </span>
                </div>
                <p className="singleArticleText">
                    obnvoiea gvoiåasjiåod gvoiåjsåingujo8ipanipgnupioanupoignuoi åanåoigbuiåwuåogub
                    gb noiaehboihpoienybioåuieoånugioåuawiåugnipaeuipbgåeubiprfipbjipdfjobjfjbpojfdodjb
                    fionboinjfb fij bij irfip gjrip gjpjpojbgpj pr gjpj prjgpr jpgjer
                    rfj gpi eipg iperjipgh peirjgpij erpj gpierjpig jerpijgpjerpgjporj gjrg j
                    r
                    h giprh pgjpirj gipjrpogjporjgo pjropjg 
                    r goprj gr
                    g kråo
                     goiprjg 
                     r
                </p>
            </div>
        </div>
     );
}
 
export default SingleArticle;
