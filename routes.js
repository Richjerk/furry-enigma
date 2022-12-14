import { Router } from 'express'
import AppConfigController from './controllers/AppConfigController'
import AuthController from './controllers/AuthController'
import VehiclesController from './controllers/VehiclesController'
import ConfigController from './controllers/ConfigController'
import PropertiesController from './controllers/PropertiesController'
import LogsController from './controllers/LogsController'

const appConfigController = new AppConfigController()
const authController = new AuthController()
const vehiclesController = new VehiclesController()
const configController = new ConfigController()
const propertiesController = new PropertiesController()
const logsController = new LogsController()

const router = new Router()

router.post('/app-config', appConfigController.store)
router.get('/app-config', appConfigController.get)
router.delete('/app-config', appConfigController.reset)

router.put('/config', configController.update)
router.get('/config', configController.get)

router.get('/properties', propertiesController.get)
router.put('/properties', propertiesController.update)

router.get('/vehicles', vehiclesController.index)
router.post('/vehicles/data/:id', vehiclesController.getData)
router.delete('/vehicles/:id/delete', vehiclesController.delete)

router.get('/auth/callback', authController.oAuthCallback)
router.post('/auth/fleet', authController.fleetAuth)
router.get('/auth/fleet/vehicles', authController.getFleetVehicles)

router.get('/logs/csv', logsController.csv)
router.post('/webhook', logsController.webhook)

export default router
