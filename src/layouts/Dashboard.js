import React from 'react'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Grid, GridColumn } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories></Categories>
                    </Grid.Column>
                    <GridColumn width={12}>
                        <Route exact path="/" component={ProductList} />
                        <Route exact path="/products" component={ProductList} />
                        <Route path="/products/:name" component={ProductDetail} />
                        <Route path="/cart" component={CartDetail} />
                    </GridColumn>
                </Grid.Row>
            </Grid>
            
            
          
        </div>
    )
}
