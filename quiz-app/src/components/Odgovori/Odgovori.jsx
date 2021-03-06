import style from './odgovori.module.css'
import pitanja from '../../files/pitanja'

let Odgovori = (props) => {
    let odgovori = pitanja[props.currentQuestion].odgovori;
    const {currentQuestion, setCurrentQuestion, score, setScore, showScore, setShowSchore} = props

    let odgovoriJsx = odgovori.map((odgovor, index) => {
        return   <button key={index} onClick={() => handleAnswerOptionClick(odgovor.correct)} className={`${style.btn} btn-primary`}>{odgovor.tekst}</button>
    })

    const  handleAnswerOptionClick = (tacno = false) => {
        if(currentQuestion < pitanja.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
        else{
            setShowSchore(true);
        }
        if(tacno){
            setScore(score + 1)
        }
    }
    return (
        <div className={style.container}>
            {odgovoriJsx}
        </div>
    )
}

export default Odgovori