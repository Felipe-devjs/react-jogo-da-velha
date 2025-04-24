import styles from './GameOption.module.css'
import Icon from '../icon/Icon'

const GameIcon = ({ IconName }) => <Icon iconName={iconName} size="25/px" />

function GameOption ({ status }){
    return (
        <div className={styles.gameOption}>
            {
                status === 1 && < GameIcon iconName="circle"  />
            }
             {
                status === -1 && < GameIcon iconName="x"  />
            }
        
        </div>
    )
}

export default GameOption 