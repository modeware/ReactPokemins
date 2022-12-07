import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Card,
    Image,
    Stack,
    CardBody,
    CardFooter,
    Stat,
    StatLabel,
    StatHelpText,
  } from '@chakra-ui/react'

const PokeModal = ({pokemon}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
          
            return (
              <>
                <Button bgColor={'blue.500'} color="white" onClick={onOpen}>View Details</Button>
          
                <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>{pokemon.name.toUpperCase()}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        // variant='outline'
                        >
                        <Image
                            // objectFit='cover'
                            height="300"
                            width={{ base: '100%', sm: '200px' }}
                            src={pokemon.image}
                            alt='Caffe Latte'
                        />

                        <Stack>
                            <CardBody>

                            {pokemon.stat.map((data, index)=>{
                               return(<Stat key={index}>
                                <StatLabel>{data.stat.name}</StatLabel>
                                <StatHelpText>Base: {data.base_stat}</StatHelpText>
                              </Stat>)
                            })}

                            </CardBody>

                            <CardFooter>
                        </CardFooter>
                    </Stack>
                    </Card>
                    </ModalBody>
          
                    <ModalFooter>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </>
            )
          }


export default PokeModal;