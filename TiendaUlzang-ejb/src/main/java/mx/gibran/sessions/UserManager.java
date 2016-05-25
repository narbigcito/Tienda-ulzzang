/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.gibran.sessions;

import java.io.Serializable;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author gibran
 */

@Stateless
public class UserManager implements Serializable{
    @PersistenceContext(unitName = "mx.gibran_TiendaUlzang-ejb_ejb_1.0-SNAPSHOTPU")
    private EntityManager em;
}
