
import mongoose from 'mongoose';
import { roleSchema } from './role.schema';

export class RoleModel {
    private static instance: RoleModel;
    public role: any;

    private constructor() {

    }

    public static getInstance(): RoleModel {
        if (!RoleModel.instance) {
            RoleModel.instance = new RoleModel();
        }
        return RoleModel.instance;
    }

    public async initializeModel(): Promise<void> {
        try {
        
            this.role = mongoose.model('Roles', roleSchema);
  
          
        } catch (error) {
            console.error('Error initializing the model:', error);
            throw error;
        }
    }


   
}
