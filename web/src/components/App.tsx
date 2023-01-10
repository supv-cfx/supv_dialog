import React, {Fragment, useState, useRef} from 'react';
import './App.css'
import { debugData } from "../utils/debugData";
import { fetchNui } from "../utils/fetchNui";
import { useNuiEvent } from '../hooks/useNuiEvent';
import { AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, useDisclosure, Button } from '@chakra-ui/react';

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true,
  }
])

interface Load {
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [state, setState] = useState({title: '', description: ''})
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef(null)
  
  useNuiEvent<Load>('myAction', (data) => {
    setState({title: data.title, description: data.description})
    onOpen()
  });

  const closeDialog = (data: string) => {
    onClose()
    fetchNui('closeDialog', data)
  };

  return (
    <>
      <AlertDialog
        motionPreset='slideInBottom'
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        closeOnOverlayClick={false}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent backgroundColor='#1e293b' color={'white'}>
            <AlertDialogHeader textAlign={'center'} fontSize='xl' fontWeight='bold' borderBottom={'rgba(0, 0, 0, 0.805) solid 2px'}>
              {state.title}
            </AlertDialogHeader>

            <AlertDialogBody textAlign={'center'}>
              {state.description}
            </AlertDialogBody>

            <AlertDialogFooter mx='auto'>
              <Button ref={cancelRef} h={6} colorScheme='green' onClick={() => closeDialog('validate')}>
                Acceptez
              </Button>
              <Button colorScheme='red' h={6} onClick={() => closeDialog('cancel')} ml={3}>
                Refusez
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default App;
