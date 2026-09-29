import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePatientsStore = defineStore('patients', () => {
 
    const createPatientsList = () => [
    {
    id: 1, 
    firstname: 'John',
    lastname: 'Doe',
    nationalId: 12349241,
    condition: 'Flu',
    address: '123 Main St, Cityville',
    email: 'john.doe@example.com',
    phone: '+254712345678',
    dob: '1993-05-15' ,

    },
     {
    id: 2, 
    firstname: 'Jane',
    lastname: 'Smith',
    nationalId: 12454548, 
    condition: 'Cold',
    address: '456 Oak Ave, Townsville',
    email: 'jane.smith@example.com',
    phone: '+254712345679',
    dob: '2013-05-15' ,

    },
     {
    id: 3, 
    firstname: 'Sam',
    lastname: 'Johnson',
    nationalId: 67345678, 
    condition: 'Diabetes',
    address: '789 Pine Rd, Villagetown',
    email: 'sam.johnson@example.com',
    phone: '+254712345680',
    dob: '1983-09-20' ,

    },
       {
    id: 4,
    firstname: 'Alice',
    lastname: 'Williams',
    nationalId: 92445638,
    condition: 'Hypertension',
    address: '101 Elm St, Hamletville',
    email: 'alice.williams@example.com',
    phone: '+254712345681',
    dob: '1988-12-10' ,
    }
]

    const patients = ref(createPatientsList())

     const selectedPatientId = ref(null)
     const selectedPatient = computed(() => {
        return patients.value.find(user => user.id === selectedPatientId.value)
     })
     function selectPatient(id) {
        selectedPatientId.value = id
    }

    function addPatient(data){
        const lastId = patients.value.length > 0 ? 
        patients.value[patients.value.length - 1].id : 0
        data.id = lastId + 1
        patients.value.push(data)
    }

    const resetPatients = () => {
        patients.value = createPatientsList()
    }

    function newTriage(data, patientId){
        const patient = patients.value.find(p => p.id === patientId);
        patient.triage = data
    }

    function newConsultation(data, patientId){
        const patient = patients.value.find(p => p.id === patientId);
        patient.consultation = data
    }

    function newLab(data, patientId){
        const patient = patients.value.find(p => p.id === patientId);
        patient.lab = data
    }

    function newPrescription(data, patientId){
        const patient = patients.value.find(p => p.id === patientId);
        patient.prescription = data
    }

  return {
        patients,
          addPatient,
          selectedPatientId,
          selectedPatient,
          selectPatient,
          resetPatients,
          newTriage,
          newConsultation,
          newLab,
          newPrescription,
  }
},
{
    persist: true
}
)


