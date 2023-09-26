import { CopyToClipboard } from "react-copy-to-clipboard"
import {Toaster, toast} from "react-hot-toast"

const CopyText = ({textCopy}) => {
  return (
    <div className="copy__text">
        <CopyToClipboard text={textCopy}>
            <>
                <button className="copy__btn" onClick={()=>toast('Copied text')}>Copy</button>
            </>
            
        </CopyToClipboard>
        <Toaster/>
    </div>
  )
}
export default CopyText