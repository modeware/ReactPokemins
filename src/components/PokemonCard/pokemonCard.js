import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Box, Grid, GridItem } from '@chakra-ui/react'
import PokeModal from '../PokeModal/pokeModal';


const PokemonCard = ({pokemons}) => {  
 return (
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
    {pokemons.map((pokemon)=>{
        return (
            <GridItem key={pokemon.id}> 
                    <Card  maxW='sm' height='sm'>
                        <CardBody>
                            <Image
                            src={pokemon.image}
                            alt={pokemon.name}
                            borderRadius='lg'
                            height={20}
                            maxH={20}
                            />
                            <Stack mt='6' spacing='3'>
                            <Heading size='md'>{pokemon.id}</Heading>
                            <Text size='md' color='blue.600' fontWeight="500" >
                               {pokemon.name.toUpperCase()}
                            </Text>
                            <Box>
                            <Heading size='sm' mb="2">Types</Heading>
                                {pokemon.types.map((type)=><Text ml="5" color='blue.600'>
                                        -{type.name}
                                </Text>)}
                            </Box>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <PokeModal pokemon={pokemon}/>
                            </ButtonGroup>
                        </CardFooter>
                        </Card>
                        </GridItem>
                )
                
        })}
     </Grid>
 )

}

export default PokemonCard;