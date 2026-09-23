<script setup>
import {ref} from 'vue'

const patients = [
    { 
    id: 1, 
    firstname: 'John',
    lastname: 'Doe',
    age: 30, 
    condition: 'Flu',
    address: '123 Main St, Cityville',
    email: 'john.doe@example.com',
    phone: '+254712345678',
    dob: '1993-05-15'

    },
    { 
    id: 2, 
    firstname: 'Jane',
    lastname: 'Smith',
    age: 13, 
    condition: 'Cold',
    address: '456 Oak Ave, Townsville',
    email: 'jane.smith@example.com',
    phone: '+254712345679',
    dob: '2013-05-15',
    
    },
    { 
    id: 3, 
    firstname: 'Sam',
    lastname: 'Johnson',
    age: 40, 
    condition: 'Diabetes',
    address: '789 Pine Rd, Villagetown',
    email: 'sam.johnson@example.com',
    phone: '+254712345680',
    dob: '1983-09-20',
    },
    { 
    id: 4,
    firstname: 'Alice',
    lastname: 'Williams',
    age: 35,
    condition: 'Hypertension',
    address: '101 Elm St, Hamletville',
    email: 'alice.williams@example.com',
    phone: '+254712345681',
    dob: '1988-12-10',
    }
];

const showAddDialog = ref(false)


</script>

<template>
    <v-container class="mt-6">
        <v-row>
            <v-col md="1">
                <h1>Patients</h1>
            </v-col>
            <v-spacer></v-spacer>
            <v-col md="2" class="text-end">
                <v-btn clas="ma-2" color="primary" icon="mdi-plus" @click="showAddDialog = true" ></v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-table class="border" striped="even">
                    <thead>
                    <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Condition</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Date of Birth</th>
                            <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in patients">
                            <td>{{ item.firstname}}</td>
                            <td>{{ item.lastname }}</td>
                            <td>{{ item.age }}</td>
                            <td>{{ item.condition }}</td>
                            <td>{{ item.address }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.phone }}</td>
                            <td>{{ item.dob }}</td>
                            <td>
                                <v-btn color="primary" size="small" to="/ViewPatients">
                                    <v-icon icon="mdi-eye"></v-icon>
                                 View
                                </v-btn></td>
                        </tr>
                    </tbody>

                </v-table>
                    
            </v-col>
        </v-row>
    </v-container>

    <v-dialog v-model="showAddDialog" max-width="50%">
        <v-form>
            <v-card class="pa-4">
                <v-row>
                    <v-card-title>
                        Add Patient:
                    </v-card-title>
                    <v-spacer></v-spacer>
                    <v-btn clas="ma-2" color="secondary" icon="mdi-close" @click="showAddDialog = false" ></v-btn>
                </v-row>
                <v-divider class="mb-4" color="primary" opacity="1.5" thickness="3" gradient> </v-divider>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="First Name" variant="outlined" prepend-icon="mdi-account-outline">  </v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="Last Name" variant="outlined" prepend-icon="mdi-account-outline">  </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-number-input label="Age" variant="outlined" prepend-icon="mdi-baby-face-outline">  </v-number-input>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="Condition" variant="outlined" prepend-icon="mdi-heart-broken-outline">  </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="Email" variant="outlined" prepend-icon="mdi-email-outline">  </v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field type="number" label="Phone Number" variant="outlined" prepend-icon="mdi-phone-outline">  </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="Address" variant="outlined" prepend-icon="mdi-map-marker-outline">  </v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-date-input label="Date Of Birth" variant="outlined" prepend-icon="mdi-calendar-outline">  </v-date-input>
                    </v-col>
                </v-row>
                <v-divider class="mb-4" color="primary" opacity="1.5" thickness="3" gradient> </v-divider>
                <v-row>
                    <v-col>
                        <v-card-actions>
                            <v-btn color="primary" variant="outlined">
                                <v-icon icon="mdi-close"></v-icon>
                            Close</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" variant="outlined">
                                <v-icon icon="mdi-content-save-outline"></v-icon>
                            Save</v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-card>
        </v-form>
    </v-dialog>
</template>
