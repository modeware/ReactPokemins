import {useEffect, useState} from 'react';
import axios from 'axios';
import PokemonCard from '../PokemonCard/pokemonCard';
import { Box, Container, Button, CircularProgressLabel, Spinner, Grid, GridItem, Input, Text } from '@chakra-ui/react';




const PokePage = () => {
    let [pokemons, setPokemons] = useState([])
    let [offset, setOffset] = useState(0)
    let [loading, setIsLoading] = useState(false)

    const fetchPokemons = async () => {
        setIsLoading(true)
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${20}&offset=${offset}`).then((response)=>{
        
            let filteredPokemons = response.data.results.map(async (pokemon) => {
                let pokedetails = await getEachPokemonDetail(pokemon.url);
                return {
                    name: pokedetails.name,
                    id: pokedetails.id, 
                    types: pokedetails.types.map((type)=>type.type),
                    image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokedetails.id}.svg`,
                    stat: pokedetails.stats
    
                }
            })
            Promise.all(filteredPokemons).then((resolved)=>{
                setPokemons(resolved)
                setIsLoading(false)
            })
           })
    }


    useEffect(()=>{
       
       fetchPokemons()
        
    }, [offset])

    
    const getEachPokemonDetail = async (url) => {
        let details = await axios.get(url);
        return (details.data)
    }

    const newListOfPokemons = (direction) => {
        if(direction === 'next'){
            let next = offset + 20
            setOffset(next)
        }
        else{
            let next = offset - 20
            setOffset(next <=0 ? 0: next)
        }
    }

    return (
            <>
                { !loading ? 
                <>
                <Text fontSize="lg" fontWeight="700">Pokemons</Text>
                <Input w="lg" mb="10" mt="10" placeholder='Search Pokemon'/>
                <PokemonCard pokemons={pokemons}/>
                
                <Grid templateColumns={'1fr 1fr'}>
                    <Button  w="sm" onClick={()=>{newListOfPokemons('prev')}} colorScheme='blue' m="5">Previous</Button>
                    <Button justifySelf={'end'} w="sm" onClick={()=>{newListOfPokemons('next')}} colorScheme='blue' m="5">Next</Button>
                </Grid>
                </>
                :<Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
                ml={"50%"}
                mr={"50%"}
              />
                }
                
            </>
    )
}

export default PokePage;