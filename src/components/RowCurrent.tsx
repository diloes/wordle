import Box from "./Box";
import styles from './row.module.scss'

interface RowCurrentProps {
  word: string
}

export default function RowCurrent({ word }: RowCurrentProps) {
  return (
    <div className={styles.row}>
      
      { // Los cuadraditos que están rellenos en nuestra RowCurrent
        word.split('').map((letter, i) => (
          <Box key={i} value={letter} status='edit' />
        ))
      }
      
      { // Los cuadraditos que faltan por rellenar en nuestra RowCurrent
        Array.from(Array(5 - word.length)).map((letter, i) => (
          <Box key={i} value={letter} status='edit' />
        ))
      }
    </div>
  )
}
