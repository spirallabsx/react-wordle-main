import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Get a life" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        29 letters in the alphabet. So that means around 8,000 words possible. Guess one.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="correct"
        />
        <Cell value="O" />
        <Cell value="O" />
        <Cell value="K" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="T" />
        <Cell value="A" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="S"
          status="present"
        />
        <Cell value="T" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter S is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" />
        <Cell value="O" />
        <Cell value="O" />
        <Cell isRevealing={true} isCompleted={true} value="B" status="absent" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter B is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
