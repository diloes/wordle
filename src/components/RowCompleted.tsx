import Box from "./Box"
import { BoxStatus } from "./types"
import styles from "./row.module.scss"

interface RowComletedProps {
  word: string
  solution: string
  animate: boolean
}

export default function RowCompleted({ word, solution, animate = false }: RowComletedProps) {

   const checkLetter = (letter: string, pos: number): BoxStatus => {
    if( solution.includes(letter) ){
      if( solution[pos] === letter ){
        return 'correct'
      } else {
        return 'present'
      }
    } else {
      return 'absent'
    }
   }

  return (
    <div className={styles.row}>
      {
        Array.from(Array(5)).map( (_, i) => (
          <Box key={i} value={word[i]} status={checkLetter(word[i], i)} />
        ))
      }
    </div>
  )
}
